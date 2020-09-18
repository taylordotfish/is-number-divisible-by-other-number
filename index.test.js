/*
 * Copyright (C) 2020 taylor.fish <contact@taylor.fish>
 *
 * This file is part of is-number-divisible-by-other-number.
 *
 * is-number-divisible-by-other-number is free software: you can redistribute
 * it and/or modify it under the terms of the GNU Affero General Public License
 * as published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * is-number-divisible-by-other-number is distributed in the hope that it will
 * be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero
 * General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with is-number-divisible-by-other-number. If not, see
 * <https://www.gnu.org/licenses/>.
 */

const divisible = require(".");

test("0 is divisible by 1", () => {
    expect(divisible.isZeroDivisibleByOne()).toBe(true);
});

test("0 is divisible by 2", () => {
    expect(divisible.isZeroDivisibleByTwo()).toBe(true);
});

test("1 is divisible by 1", () => {
    expect(divisible.isOneDivisibleByOne()).toBe(true);
});

test("1 is not divisible by 2", () => {
    expect(divisible.isOneDivisibleByTwo()).toBe(false);
});

test("2 is divisible by 1", () => {
    expect(divisible.isTwoDivisibleByOne()).toBe(true);
});

test("2 is divisible by 2", () => {
    expect(divisible.isTwoDivisibleByTwo()).toBe(true);
});

test("2 is not divisible by 3", () => {
    expect(divisible.isTwoDivisibleByThree()).toBe(false);
});

test("2 is not divisible by 4", () => {
    expect(divisible.isTwoDivisibleByFour()).toBe(false);
});

test("6 is divisible by 1, 2, 3, and 6", () => {
    expect(divisible.isSixDivisibleByOne()).toBe(true);
    expect(divisible.isSixDivisibleByTwo()).toBe(true);
    expect(divisible.isSixDivisibleByThree()).toBe(true);
    expect(divisible.isSixDivisibleBySix()).toBe(true);
});

test("6 is not divisible by 4 or 5", () => {
    expect(divisible.isSixDivisibleByFour()).toBe(false);
    expect(divisible.isSixDivisibleByFive()).toBe(false);
});

test("6 is not divisible by 12", () => {
    expect(divisible.isSixDivisibleByTwelve()).toBe(false);
});

test("123 is divisible by 123", () => {
    expect(divisible.isOneHundredTwentyThreeDivisibleByOneHundredTwentyThree()).toBe(true);
    expect(divisible.isOneHundredAndTwentyThreeDivisibleByOneHundredAndTwentyThree()).toBe(true);
});

test("246 is divisible by 123", () => {
    expect(divisible.isTwoHundredAndFortySixDivisibleByOneHundredTwentyThree()).toBe(true);
    expect(divisible.isTwoHundredFortySixDivisibleByOneHundredAndTwentyThree()).toBe(true);
});

test("1233 is not divisible by 123", () => {
    expect(divisible.isOneThousandTwoHundredThirtyThreeDivisibleByOneHundredTwentyThree()).toBe(false);
    expect(divisible.isOneThousandTwoHundredAndThirtyThreeDivisibleByOneHundredAndTwentyThree()).toBe(false);
});

test("358303 is divisible by 32573", () => {
    expect(divisible.isThreeHundredFiftyEightThousandThreeHundredThreeDivisibleByThirtyTwoThousandFiveHundredSeventyThree()).toBe(true);
    expect(divisible.isThreeHundredAndFiftyEightThousandThreeHundredThreeDivisibleByThirtyTwoThousandFiveHundredAndSeventyThree()).toBe(true);
});

test("439883 is not divisible by 32573", () => {
    expect(divisible.isFourHundredThirtyNineThousandEightHundredEightyThreeDivisibleByThirtyTwoThousandFiveHundredSeventyThree()).toBe(false);
    expect(divisible.isFourHundredAndThirtyNineThousandEightHundredAndEightyThreeDivisibleByThirtyTwoThousandFiveHundredSeventyThree()).toBe(false);
});

test("15569625114 is divisible by 5189875038", () => {
    expect(divisible.isFifteenTrillionFiveHundredSixtyNineMillionSixHundredTwentyFiveThousandOneHundredFourteenDivisibleByFiveTrillionOneHundredEightyNineMillionEightHundredSeventyFiveThousandThirtyEight()).toBe(true);
});
