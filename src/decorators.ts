// function Log(constructor: Function) {
//     console.log(constructor)
// }
//
// function Log2(target: any, propName: string | symbol) {
//     console.log(target)
//     console.log(propName)
// }
//
// function Log3(target: any, propName: string | Symbol, descriptor: PropertyDescriptor) {
//     console.log(target)
//     console.log(propName)
//     console.log(descriptor)
// }

@Component({
    selector: '#card',
    template: `
        <div class="card">
            <div class="card-content">
                <span class="card-title">Card Component</span>
            </div>
        </div>
    `
})
class CardComponent {
    constructor(public name: string) {
    }

    @Bind
    logName(): void {
        console.log(`Component name: ${this.name}`)
    }
}

interface IComponentDecorator {
    selector: string
    template: string
}

/** Декоратор, который, при создании декорируемого объекта, складывает его в дом-дерево */
function Component(config: IComponentDecorator) {
    return function
        <T extends { new(...args: any[]): object }>
    (Constructor: T) {
        return class extends Constructor { // анонимный класс
            constructor(...args: any[]) {
                super(...args)
                const el = document.querySelector(config.selector)!
                el.innerHTML = config.template
            }
        }
    }
}

const card = new CardComponent('My Card Component')

const btn = document.querySelector('#btn')!
btn.addEventListener('click', card.logName/*.bind(card)*/)

function Bind(_: any, _2: any, descriptor: PropertyDescriptor): PropertyDescriptor {
    const original = descriptor.value

    return {
        configurable: true,
        enumerable: false,
        get() {
            return original.bind(this) // this здесь инстанс класса с которым работаем
        }
    }
}

// =======

type ValidatorType = 'required' | 'email'

interface IValidatorConfig {
    [prop: string]: {
        [validateProp: string]: ValidatorType
    }
}

const validators: IValidatorConfig = {}

function Required(target: any, propName: string) {
    validators[target.constructor.name] = {
        ...validators[target.constructor.name],
        [propName]: 'required'
    }
}

function validate(obj: any): boolean {
    const objConfig = validators[obj.constructor.name]
    if (!objConfig) {
        return true
    }
    let isValid = true
    Object.keys(objConfig).forEach(key => {
        if (objConfig[key] === 'required') {
            isValid = isValid && !!obj[key]
        }
    })
    return isValid
}

class Form3 {
    @Required
    public email: string | void

    constructor(email?: string) {
        this.email = email
    }
}

const form = new Form3('asdadads@gmail.com')

if (validate(form)) {
    console.log('Valid: ', form)
} else {
    console.log(('Validation error'))
}

console.log(form)
