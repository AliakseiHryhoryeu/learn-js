class Typescript {
    version: string
    constructor(version: string) {
        this.version = version
    }
    info(name: string) {
        return `[${name}]: TypeScript version is ${this.version}`
    }
}
// Modifiers in classes
// readonly
// protected
// public

class Car {
    readonly model: string
    protected year: number
    public price: number

    constructor(model: string, year: number, price: number) {
        this.model = model,
            this.year = year,
            this.price = price
    }

}


class Animal {
    protected voice: string = ''
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
    public MakeVoice(): void {
        console.log(this.voice)
    }
}

const cat1 = new Cat()
cat1.setVoice('Meow')

const cat2 = new Cat()
cat2.setVoice('Meow Meow Meow')
// cat1.voice - error becouse Animal - voice is protected

// Abstract classes

abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render(): void {
        console.log('Component on render')
    }

    info(): string {
        return 'This is info';
    }
}