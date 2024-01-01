---
tags: [javascript, v8, string, integer]
---

To convert a string to an integer, the classic algorithm is:

```ts
const fromBase10 = (text: string): bigint => {
	let result = 0n;

	// start from the left of the string
	for (let i = 0; i < text.length; i++) {
		// for each digit, take the previous result,
		// multiply it by the base, and add the new digit
		result = result * 10n + BigInt("0123456789".indexOf(text.charAt(i)));
	}

	/* or we could do that, but it's slower:
	// starting from the right of the string
	for (let i = text.length - 1; i >= 0; i--) {
		// multiply each digit by the base to the power of
		// the digit position, and add it to the result
		result +=
			BigInt("0123456789".indexOf(text.charAt(i))) *
			10n ** BigInt(text.length - 1 - i);
	}
	*/

	return result;
};
```

However, this is quite slow: it takes 30s on my machine to convert a string containing 500,000 random digits. (I tried to compile it to WebAssembly with AssemblyScript, but it made it even slower.)

Whereas it takes 100ms to do it with `BigInt`!

Sure, `BigInt` is implemented in C++, but 300 times slower seems a bit of a stretch...

Turns out, `BigInt` uses a different algorithm, which can be found in V8's [`FromStringLarge`](https://github.com/v8/v8/blob/main/src/bigint/fromstring.cc) function.

I'll leave it to you to read the description in V8's source code to understand how it works, and here is my rough JavaScript version:

```ts
const fromBase10 = (text: string): bigint => {
	let parts = text.split("").map((part) => [BigInt(part), 10n]);

	if (parts.length === 1) {
		return parts[0][0];
	}

	let pairFull: boolean;
	while (parts.length > 2) {
		pairFull = false;
		parts = parts.reduce<bigint[][]>((acc, cur, i) => {
			if (!pairFull) {
				if (i === parts.length - 1) {
					acc.push(cur);
				} else {
					acc.push([
						cur[0] * parts[i + 1][1] + parts[i + 1][0],
						cur[1] * parts[i + 1][1],
					]);
					pairFull = true;
				}
			} else {
				pairFull = false;
			}
			return acc;
		}, []);
	}

	return parts[0][0] * parts[1][1] + parts[1][0];
};
```

It now takes 120ms to do the conversion! Just slightly slower than `BigInt`, and without any optimisations!

It's a bit counter intuitive, because this algorithm does about 1,000,000 iterations, instead of 500,000 for the classic algorithm (which does one for each digit). The reason is, I guess, that the multiplications are smaller, and possibly more optimisable because involving parts that are of the same size.

Now, why do I want to reimplement `BigInt`, you may be wondering?

Because when parsing a string, `BigInt` only accepts bases 2, 8, 10, and 16. It isn't possible with any other base (there is [a proposal](https://github.com/tc39/proposal-number-fromstring) for this, but it's not getting much traction).

I needed to parse strings in different bases, so that's why I created this.
