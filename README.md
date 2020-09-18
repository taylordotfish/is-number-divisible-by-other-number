is-number-divisible-by-other-number
===================================

Check if a number is divisible by another number.

Inspired by [@an-empty-string](https://github.com/an-empty-string)’s package
[divisibility](https://www.npmjs.com/package/divisiblity).

Usage
-----

Simply call the appropriate function!

```js
const isNumberDivisibleByOtherNumber = require("is-number-divisible-by-other-number");
isNumberDivisibleByOtherNumber.isSixDivisibleByThree(); // => true
isNumberDivisibleByOtherNumber.isSixDivisibleByFour(); // => false
isNumberDivisibleByOtherNumber.isTwoHundredTwentyOneDivisibleBySeventeen(); // => true
```

You can even test large numbers!

```js
isNumberDivisibleByOtherNumber.isFourteenMillionFiftyEightThousandSixHundredNinetyFourDivisibleBySevenMillionTwentyNineThousandThreeHundredFortySeven(); // => true
isNumberDivisibleByOtherNumber.isFourteenMillionFiftyEightThousandSixHundredNinetyFourDivisibleBySevenMillionTwentyNineThousandThreeHundredFortyEight(); // => false
```

Tests
-----

is-number-divisible-by-other-number uses [Jest](https://jestjs.io/) for tests.

To run the tests:

```bash
npm install
npm test
```

License
-------

is-number-divisible-by-other-number is licensed under the GNU Affero General
Public License, version 3.0 or later; see [LICENSE](LICENSE).
