// Number
/*
Number.parseInt('42')
console.log('MAX_SAFE_INTEGER: ' + Number.MAX_SAFE_INTEGER)
console.log('MAX_VALUE: ' + Number.MAX_VALUE)
console.log('MIN_SAFE_INTEGER: ' + Number.MIN_SAFE_INTEGER)
console.log('MIN_VALUE: ' + Number.MIN_VALUE)
console.log('POSITIVE_INFINITY: ' + Number.POSITIVE_INFINITY)
console.log('NEGATIVE_INFINITY: ' + Number.NEGATIVE_INFINITY)

const weird = 1 / undefined // NaN
console.log(Number.isNaN(weird)) // true
console.log(Number.isFinite(Infinity)) // false
*/

// BigInt
/*
// Number.MAX_SAFE_VALUE e7
console.log(typeof 90071992547409910000000) // number
console.log(typeof 90071992547409910000000n) // bigint
// console.log(typeof 90071992547409910000000.1239n) // error
// console.log(10n - 4) // error: type mixing
console.log(parseInt(10n) - 4) // 6
console.log(10n - BigInt(4)) // 6n
console.log(5n / 2n) // 2n
*/

// Math
/*
console.log(Math.E)
console.log(Math.PI)
console.log(Math.sqrt(25)) // 5
console.log(Math.pow(5, 3)) // 125
console.log(Math.abs(-42)) // 42
console.log(Math.max(32, 42, 12, 54)) // 54
console.log(Math.min(32, 42, 12, 54)) // 12
console.log(Math.floor(4.9)) // 4
console.log(Math.ceil(4.9)) // 5
console.log(Math.round(4.9)) // 5 // to nearest integer
console.log(Math.trunc(4.9)) // 4 // removing any fractional digits
console.log(Math.random()) // 0.(0)..1.(0)
function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log(getRandomBetween(10, 42))
*/
