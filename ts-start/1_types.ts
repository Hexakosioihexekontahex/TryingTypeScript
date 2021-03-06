// Primitive types
const isFetching: boolean = true
const isLoading: boolean = false
let int: number = 42
// int = 'asd' // error
const float: number = 4.2
const num: number = 3e10
const message1: string = 'Hello, TypeScript'

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = numberArray
const words: string[] = ['Hello', 'TypeScript']

// Tuple
const contact: [string, number] = ['Roman', 1234567]

// Any
let variable: any = 42
variable = 'new string'

// ========
function sayMyName(name: string)/*: void*/ {
    console.log(name)
}
sayMyName('Heizenberg')

// Never
function throwError(message: string): never {
    throw new Error(message)
}

function infinite(): never {
    while (true) {
        // doSomething
    }
}

// Type
type Login = string

const login: Login = 'admin'
// const login2: Login = 2 // error

type ID = string | number
const id1: ID = 1234
const id2: ID = '1234'
// const id3: ID = true

// Null / Undefined
type SomeType = string | null | undefined
