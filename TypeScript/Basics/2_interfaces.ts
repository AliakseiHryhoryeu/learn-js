interface IUser {
    readonly id: string | number
    username: string
    password: string
    description?: string
    message?: string
    money: {
        euro: number
        dollar: number
    }

}

const temp123: IUser = {
    id: 123,
    username: 'temp123',
    password: 'qwerty',
    money: {
        euro: 111,
        dollar: 222
    }
}

const temp111: IUser = {
    id: 111,
    username: 'temp111',
    password: 'qwerty',
    description: 'This is description',
    message: 'Hello world',
    money: {
        euro: 333,
        dollar: 444
    }
}

temp111.description = 'changed description'

// cast

const temp124 = {} as IUser
const temp125 = <IUser>{}
console.log(temp123)
console.log(temp111)

console.log(temp124)
console.log(temp125)

// interface inheritance

interface IFigure {
    id: number | string,
    area?: number,
    perimeter?: number

}

interface IRectangle extends IFigure {
    size: {
        height: number,
        width: number
    }
    getArea: () => number
}

const rectangle_111: IRectangle = {
    id: 1234,
    size: {
        height: 20,
        width: 30

    },
    getArea(): number {
        return this.size.height * this.size.width
    }
}


interface IStyles {
    [key:string]:string
}

const css:IStyles = {
border: '1px solid black',
marginTop:'2px',
borderRadius:'5px'
}