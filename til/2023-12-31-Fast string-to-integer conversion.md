---
tags: [javascript, v8, string, integer]
---

To convert a string to an integer, the classic algorithm is:

```ts
const fromBase10 = (text: string): bigint => {
	let result = 0n;

	// start from the left of the string
	for (let i = 0; i < text.length; i++) {
		// for each digit, take the previous result, multiply it by the base, and add the new digit
		result = result * 10n + BigInt("0123456789".indexOf(text.charAt(i)));
	}

	// or we could do that, but it's slower:
	// // starting from the right of the string
	// for (let i = text.length - 1; i >= 0; i--) {
	// 	// multiply each digit by the base to the power of the digit position, and add it to the result
	// 	result +=
	// 		BigInt("0123456789".indexOf(text.charAt(i))) *
	// 		10n ** BigInt(text.length - 1 - i);
	// }

	return result;
};
```

However, this is quite slow: it takes 15s on my machine to convert `1*10^500,000` (a string containing a `1` followed by `500,000` zeros). (I tried to compile it to WebAssembly with AssemblyScript, but the result was even slower.)

Whereas it takes 50ms to do it with `BigInt`!

Sure, `BigInt` is implemented in C++, but 300 times slower seems a bit of a stretch...

Turns out, `BigInt` uses a different algorithm, which we can find in V8's [`FromStringLarge`](https://github.com/v8/v8/blob/main/src/bigint/fromstring.cc) function.

I'll leave it to you to read the description, in V8's source code, to understand how it works, and here is my rough JavaScript version:

```ts
const fromBase10 = (text: string): bigint => {
	let parts = text.split("").map((part) => [BigInt(part), 10n]);

	let indicator: boolean;
	while (parts.length > 2) {
		indicator = false;
		parts = parts.reduce<bigint[][]>((acc, cur, i) => {
			if (!indicator) {
				if (i === parts.length - 1) {
					acc.push(cur);
				} else {
					acc.push([
						cur[0] * parts[i + 1][1] + parts[i + 1][0],
						cur[1] * parts[i + 1][1],
					]);
					indicator = true;
				}
			} else {
				indicator = false;
			}
			return acc;
		}, []);
	}

	return parts[0][0] * parts[1][1] + parts[1][0];
};
```

It now takes 100ms to do the conversion! Only 2 times slower that the `BigInt`, and without any optimisations. Quite good!

Now, why do I want to reimplement `BigInt`, you may be wondering?

Because when parsing a string, `BigInt` only accepts bases 2, 8, 10, and 16. It isn't possible with any other base (there is [a proposal](https://github.com/tc39/proposal-number-fromstring) for this, but it's not getting much traction).

I needed to parse strings in different bases, so that's why I created this.
