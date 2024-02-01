---
tags: [javascript, v8, string, integer]
---

To convert an integer to a string, the classic algorithm is the successive division method:

```ts
const toBase = (
	value: bigint,
	base: bigint = 10n,
	alphabet: string = "0123456789",
): string => {
	let result = "";

	let dividend = value;
	let remainder;

	while (dividend >= base) {
		remainder = dividend % base;
		result = alphabet[Number(remainder)] + result;
		dividend = dividend / base;
	}
	result = alphabet[Number(dividend)] + result;

	return result;
};
```

However, this is quite slow: it takes 30s on my machine to convert a bigint of 500,000 random digits in base 10.

As for the [string-to-integer](/til/2023/12/31/Fast%20string-to-integer%20conversion) conversion, Chrome's `BigInt` is much faster.

Again, `BigInt` uses a different algorithm, [« divide-and-conquer conversion »](https://github.com/v8/v8/blob/main/src/bigint/tostring.cc).

The description in V8's source code will help you to understand how it works, and here is my rough JavaScript version:

```ts
const toBase = (
	value: bigint,
	base: bigint = 10n,
	alphabet: string = "0123456789",
): string => {
	let result = "";

	const divisors = [base];

	const numberOfBitsInValue = value.toString(2).length;

	while (divisors.at(-1).toString(2).length * 2 - 1 <= numberOfBitsInValue) {
		divisors.push(divisors.at(-1) ** 2n);
	}

	const devide = (dividend: bigint, divisorIndex: number) => {
		const divisor = divisors[divisorIndex];

		const remainder = dividend % divisor;
		const newDividend = dividend / divisor;

		if (divisorIndex > 0) {
			devide(remainder, divisorIndex - 1);
			devide(newDividend, divisorIndex - 1);
		} else {
			result = `${alphabet[Number(newDividend)]}${
				alphabet[Number(remainder)]
			}${result}`;
		}
	};

	devide(value, divisors.length - 1, true);

	result = result.replace(new RegExp(`^${alphabet[0]}*`), "");

	return result;
};
```

It now takes 150ms to do the conversion, and without any optimisations!

The reason I reimplemented this algorithm is that I needed to convert numbers to bases higher than 36, which is the maximum supported by `BigInt`.
