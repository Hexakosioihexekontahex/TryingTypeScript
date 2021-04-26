class Typescript {
    private readonly version: string

    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `[${name}]: Typescript version is ${this.version}`
    }
}

// class Car {
//     private readonly model: string
//     private readonly numberOfWheels: number = 4
//
//     constructor(theModel: string) {
//         this.model = theModel
//     }
// }
class Car {
    readonly numberOfWheels: number = 4
    constructor(readonly model: string) {}
}

// ===========
class Animal {
    protected voice: string = ''
    public color: string = 'black'

    private go() {
        console.log('Go')
    }

    public run() {
        console.log('Animal run')
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }

    public run() {
        console.log('Cat run')
    }
}

const cat: Animal = new Cat();
(cat as Cat).setVoice('test')
cat.run()// Cat run
console.log(cat.color)

// ==========
abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    info(): string {
        return 'This is info';
    }

    render(): void {
        console.log('Component on render')
    }
}

