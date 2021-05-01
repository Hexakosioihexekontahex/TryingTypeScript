// const input = prompt('Абракадабра')
// alert('output: ' + input)

// console.log(typeof null) // object (meh)
// let x
// console.log(x) // undefined

// const s = 'qwe'
// console.log(!!s)

const o = 'Cat' && true // true
// console.log('\'Cat\' && true: ' + o)
const o1 = 'Cat' && 'Dog' // 'Dog'
// console.log('\'Cat\' && \'Dog\': ' + o1)
const o2 = 'Cat' || false // 'Cat'
// console.log('\'Cat\' || false: ' + o2)
const o3 = 'Cat' || 'Dog' // 'Cat'
// console.log('\'Cat\' || \'Dog\': ' + o3)

const cars = ['Mercedes', 'Audi', 'BMW']
// console.log('cars[3] ' + cars[3]) // undefined
cars[3] = 'Mazda'
cars[5] = 'Porsche'
cars[6] = null
// console.log('cars[3] ' + cars[3]) // Mazda
// console.log('cars[4] ' + cars[4]) // undefined (meh)
// console.log('cars[5] ' + cars[5]) // Porsche
/*for (let i = 0; i < cars.length; i++) {
    console.log(`Car #${i}: ${cars[i]}`)
    // cars[4] undefined
    // cars[6] null
}*/
/*const newCars = cars.filter(it => !!it)
let i = 0
for (let car of newCars) {
    console.log(`Car #${i++}: ${car}`)
}*/

/*
const numbers = [0, 1, 3, 5, 10]
numbers[6] = 15
numbers[7] = null
const notNullNumbers = numbers.filter(it => it === 0 || !!it)
notNullNumbers.forEach(it => {
    console.log(it)
})*/
/*const person = {
    firstName: 'Roman',
    lastName: 'Melnik',
    languages: ['Ru', 'En', 'De'],
    hasWife: false,
    greet: function() {
        console.log('Greeting')
    }
}
person.isProgrammer = true
console.log(person)
person.greet()
person.hasWife = true
console.log(person['hasWife'])*/
