const person = {
    name: 'Roman',
    age: 30,
    isProgrammer: true,
    languages: ['Ru', 'En', 'De'],
    'complex key': 'Complex value',
    ['key_' + (1 + 3)]: 'Computed key value', // key_4
    greet/*: function*/() {
        console.log('greet from person')
    },
    info() {
        console.log('Информация про человека оп имени ' + this.name + ':')
        Object.keys(this).forEach(key => this.hasOwnProperty(key) ? console.log('key[' + key + ']: ' + this[key]) : {})
    }
}
// person.info()
/*
console.log(person.name)
console.log(person['age'])
console.log(person['complex key'])
console.log(person['key_4'])
console.log(person)
person.greet()

person.age++
console.log(person.age)
person.languages.push('By')
console.log(person)
person['key_4'] = undefined
console.log(person)
console.log(person['key_4']) // undefined
delete person['key_4']
console.log(person)
*/
/*
// const name = person.name
// const age = person.age
// const languages = person.languages
// Деструктуризация
const {name, age: personAge = 10, languages} = person
console.log(name, personAge, languages)
*/

// for(let key in person) {
//     if (person.hasOwnProperty(key)) { // чтобы не заходить в object
//         console.log('key: ', key)
//         console.log('value: ', person[key])
//     }
// }

// const keys = Object.keys(person)
// console.log(keys)
// Object.keys(person).forEach(key => console.log(person[key]))

const logger = {
    keys() {
        console.log('Object keys: ', Object.keys(this))
    },
    keysAndValues() {
        Object.keys(this).forEach(key => {
            console.log(`key: ${key}, value: ${this[key]}`)
        })
        // const self = this
        // Object.keys(this).forEach(function(key) {
        //     console.log(`key: ${key}, value: ${self[key]}`)
        // })
    },
    withParams(top = false, between = false, bottom = false) {
        if (top) {
            console.log('------ Start ------')
        }
        Object.keys(this).forEach((key, index, array) => {
            console.log(`key: ${key}, value: ${this[key]}`)
            if (index !== array.length - 1 && between) {
                console.log('------------')
            }
        })
        if (bottom) {
            console.log('------ End ------')
        }
    }
}
// const bound = logger.keys.bind(person)
// bound()
// logger.keys.call(person)
// logger.keysAndValues.call(person)
// logger.keysAndValues.call({a:1, b:2, 3: true})

// logger.withParams.call(person)
logger.withParams.call(person, true, true, true)
// logger.withParams.apply(person, [true, true, true])
