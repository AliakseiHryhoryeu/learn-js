
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

// create custom type string
type Login = string

const login :Login = 'temp123'
// const login2:Login = 2222 - error

// create type type string or number
type ID = string | number

const testId1 = 1111111
const testId2 = 'QWERTYUIOPXSDFHKJL214521' 

