// const cars: string[] = ['Ford', 'Audi']
// const cars2: Array<string> = ['Ford', 'Audi']

/*const promise = new Promise<string>(resolve => {
    setTimeout(() => {
        resolve('promise resolved')
    }, 2000)
})
promise.then(data => {
    console.log(data.trim().toLowerCase())
})*/

/*const promise2 = new Promise<number>(resolve => {
    setTimeout(() => {
        resolve(42)
    }, 2000)
})
promise2.then(data => {
    console.log(data.toFixed)
})*/

// const promise3: Promise<boolean>

function mergeObjs<T extends object, R extends object>(a: T, b: R)/*: T & R*/ {
    return Object.assign({}, a, b)
}
const merged = mergeObjs({name: 'Roman'}, {age: 30})
console.log(merged)
const merged2 = mergeObjs({model: 'Ford'}, {year: 2010})
console.log(merged2)

function mergeObjs2<T extends {name: string}, R extends {age: number}>(a: T, b: R) {
    return Object.assign({}, a, b)
}
const merged3 = mergeObjs2({name: 'Roman'}, {age: 30})
console.log(merged3.name)
// const merged4 = mergeObjs2({model: 'Ford'}, {year: 2010}) // error

// const merged5 = mergeObjs('aaa', 'bbb') // unexpected behaviour if mergeObjs<T, R>, fixed with mergeObjs<T extends object, R extends object>
// console.log(merged5) /* {0: "b", 1: "b", 2: "b"} */

// ==========
interface IHasLength {
    length: number
}
function withCount<T extends IHasLength>(value: T) {
    return {
        value/*: value*/,
        countText: `length is ${value.length}`
    }
}
const some = 'qwertyu'
const some2 = [1, 1, 2, 3, 5, 8]
function logHasLength<T extends IHasLength>(value: T) {
    console.log(`value: ${value}, ${withCount(value).countText}`)
}
logHasLength(some)
logHasLength(some2)
logHasLength({length: 20})

// ==========
function getObjValue<T extends  object, R extends keyof T>(obj: T, key: R) {
    return obj[key]
}
const person = {
    name: 'Roman',
    age: 30
}
console.log(getObjValue(person, 'name'))
console.log(getObjValue(person, 'age'))
// console.log(getObjValue(person, 'job')) // error

// ========
class Collection<T extends boolean | string | number> {
    constructor(private _items: T[] = []) {
    }

    add(item: T) {
        this._items.push(item)
    }

    remove(item: T) {
        this._items = this._items.filter(i => i !== item)
    }

    get items(): T[] {
        return this._items
    }
}

const strings = new Collection<string>(['We', 'are', 'strings'])
strings.add('!')
strings.remove('are')
console.log(strings.items)

const numbers = new Collection<number>([1, 2, 3])
numbers.add(4)
numbers.remove(3)
console.log(numbers.items)

// const objs = new Collection([{a: 1}, {b: 2}])
// objs.remove({b: 2}) // remove не отрабатывает т.к. объект уже другой, объявляем T примитивами
// console.log(objs.items)

// =======
interface Car {
    model: string,
    year: number
}

function createAndValidateCar(model: string, year: number): Car {
    const car: Partial<Car> = {}

    if (model.length > 3) {
        car.model = model
    }

    if (year > 2000) {
        car.year = year
    }

    return <Car>car
}
console.log(createAndValidateCar('bmw', 1999)) // returns {}

// =========
const cars: Readonly<Array<string>> = ['Ford', 'Audi']
// cars.shift() // error

const ford: Readonly<Car> = {
    model: 'Ford',
    year: 2020
}
// ford.model = 'Ferrari' // error
