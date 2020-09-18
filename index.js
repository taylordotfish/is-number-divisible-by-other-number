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

const { noCase } = require("change-case");
const falsy = require("falsy");
const isEqualTo = require("is-equal-to");
const modulusOperator = require("modulus-operator");
const numberZero = require("number-zero");
const numerizer = require("numerizer");
const VerEx = require("verbal-expressions");

module.exports = new Proxy({}, {
    get(obj, prop) {
        const match = VerEx()
            .startOfLine()
            .then("is")
            .beginCapture()
            .something()
            .endCapture()
            .then("DivisibleBy")
            .beginCapture()
            .something()
            .endCapture()
            .exec(prop);

        if (falsy(match)) {
            return undefined;
        }

        const dividend = numerizer(noCase(match[1]));
        const divisor = numerizer(noCase(match[2]));

        return function isDivisible() {
            return isEqualTo(modulusOperator(dividend, divisor), numberZero);
        };
    },
});
