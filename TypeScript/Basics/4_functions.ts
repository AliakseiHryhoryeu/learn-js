// Functions

//take param string type, not return result
const sayMessage = (message: string): void => {
  console.log(message)
}

// take 2 param number type, return string
function sum(a: number, b: number): string {
  const sum: number = a + b
  return `the sum is ${sum}`
}
// sum(1,'word') - error
const resultSum: string = sum(1, 2)
console.log(resultSum)

// overload functions

interface MyPosition {
  x: number | undefined
  y: number | undefined
}

interface MyPositionWithDefault extends MyPosition {
  default: string
}

function position(): MyPosition
function position(a: number): MyPositionWithDefault
function position(a: number, b: number): MyPosition

function position(a?: number, b?: number) {
  if (!a && !b) {
    return {x: undefined, y: undefined}
  }

  if (a && !b) {
    return {x: a, y: undefined, default: a.toString()}
  }

  return {x: a, y: b}
}

console.log('Empty: ', position())
console.log('One param: ', position(42))
console.log('Two params: ', position(10, 15))
