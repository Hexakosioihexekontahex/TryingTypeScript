interface Rect {
    readonly id: string
    color?: string // ? необязательное поле
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '123',
    size: {
        width: 10,
        height: 20
    },
    color: '#ccc'
}

const rect2: Rect = {
    id: '12345',
    size: {
        width: 20,
        height: 30
    }
}
rect2.color = 'black' // можем менять внутреннее состояние константы
// rect2.id ='4324' // error, поле только для чтения (readonly)

const rect3 = {} as Rect // приведение типов
const rect4 = <Rect>{}

// =========
// наследование интерфейсов
interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '1233456',
    size: {
        width: 100,
        height: 50
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}

// ==========
// implementation
interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date): void {
        this.time = date
    }

}

// =========

interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    margiTop: '2px',
    borderRadius: '5ps'
}
