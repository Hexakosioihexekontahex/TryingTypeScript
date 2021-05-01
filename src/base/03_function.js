// Function declaration
/*
function greet(name) {
    console.log('Hello - ' + name)
}
greet('Lena')
*/
// Function expression
/*
const greet2 = function /!*greet2*!/(name) {
    console.log('Hello2 - ' + name)
}
greet2('Masha')

console.log(typeof greet2) // function
console.dir(greet2)
*/

// anonymous
/*
let counter = 0
const interval = setInterval(function() {
    if (counter === 5) {
        clearInterval(interval) // clearTimeout
    } else {
        console.log(++counter)
    }
}, 1000)
*/

// Стрелочные функции
/*
const f = /!*(*!/name/!*)*!/ => /!*{*!/
    console.log(`Name: ${name}`)
/!*}*!/
f('Richard')
console.log(f.name) //f

const pow2 = num => num ** 2
console.log(pow2(5))

const f2 = (name, age) => console.log(`Name: ${name}, age: ${age}`)

const sum = (a, b) => a + b
console.log(sum(41, 1)) // 42
console.log(sum(41)) // NaN

const sum2 = (a = 40, b = a * 2) => a + b
console.log(sum2())

function sumAll(...all) {
    let result = 0
    for (let num of all) {
        result += num
    }
    console.log(result)
}
sumAll(1, 2, 5, 7, 19, 123)
*/

// замыкания
/*
function createMember(name) {
    return function(lastName) {
        console.log(name, lastName)
    }
}
const logWithLastName = createMember('Roman')
logWithLastName('Melnik')
*/
