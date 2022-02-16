
const str: string = 'Hello123'

const bool1: boolean = true
const bool2: boolean = false

const int: number = 1234
const float: number = 1.2
const num: number = 1e12

const numArray1: number[] = [1, 2, 3, 4, 5]
const numArray2: Array<number> = [1, 2, 3, 4, 5]

const strArray: string[] = ['Hello', 'World']

let variable: any = 42
variable = 'qwerty'

// Tuple - create Array witch other's types
const balance: [string, number] = ['User123', 111111]

// Functions
function sum(a: number, b: number): string {
    const sum: number = a + b
    return `the sum is ${sum}`
}
// sum(1,'word') - error

const resultSum:string = sum(1,2)

console.log(resultSum)