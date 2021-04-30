const cars = ['Mazda', 'Ford', 'BMW', 'Mercedes']
const array = [1, 1, 2, 3, 5, 8, 13, 21, '34', false, {name: 'Roman', age: 30}]
const fib = [1, 1, 2, 3, 5, 8, 13, 21, 34]

/*
console.log(cars) // ["Mazda", "Ford", "BMW", "Mercedes"]
console.log(cars.length) // 4

cars.push('Lamborghini')
console.log(cars) // ["Mazda", "Ford", "BMW", "Mercedes", "Lamborghini"]
cars.unshift('Audi')
console.log(cars) // ["Audi", "Mazda", "Ford", "BMW", "Mercedes", "Lamborghini"]
const deleted = cars.shift()
console.log(cars) // ["Mazda", "Ford", "BMW", "Mercedes", "Lamborghini"]
console.log(deleted) // Audi
const deleteLast = cars.pop()
console.log(cars) // ["Mazda", "Ford", "BMW", "Mercedes"]
console.log(deleteLast) // Lamborghini
console.log(cars.reverse()) // ["Mercedes", "BMW", "Ford", "Mazda"]
console.log(cars)           // ["Mercedes", "BMW", "Ford", "Mazda"]

const index = cars.indexOf('Ford')
console.log(cars[index])
console.log(cars.includes('Mazda'))
const upperCars = cars.map(car => car.toUpperCase())
console.log(upperCars)  // ["MERCEDES", "BMW", "FORD", "MAZDA"]
console.log(cars)       // ["Mercedes", "BMW", "Ford", "Mazda"]
*/

const people = [
    {name: 'Roman', age: 30},
    {name: 'Iren', age: 22},
    {name: 'Helga', age: 25}
]

/*
const i = people.findIndex(function (person) {
    return person.age === 22
})
console.log(people[i])

console.log(people.find(person => person.age === 22))

for (const person of people) {
    if (person.age === 25) {
        console.log(person)
    }
}
*/

/*
const text = 'Привет, мы изучаем JavaScript!'
const reversedText = text.split('').reverse().join('')
console.log(reversedText)
*/

/*
const pow2 = num => num ** 2
const sqrt = num => Math.sqrt(num)
const pow2fib = fib.map(/!*num => num ** 2*!/pow2).map(/!*sqrt*!/Math.sqrt)
console.log(pow2fib)
const filtered = pow2fib.filter(num => num > 20)
console.log(filtered)
*/

/*
const allAges = people.reduce((acc, person) => {
    acc += person.age
    return acc
}, 0)
console.log(allAges)
*/
