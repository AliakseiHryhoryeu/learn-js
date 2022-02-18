// Generic types

const numArray1: number[] = [1, 2, 3, 4, 5]
const numArray2: Array<number> = [1, 2, 3, 4, 5]

const strArray: string[] = ['Hello', 'World']


function reverse<T>(array:T[]): T[]{
    return array.reverse()
}

reverse(strArray)


