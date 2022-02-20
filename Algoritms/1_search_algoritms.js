/* Linear search */

const linearArray = [1, 5, 8, 0, 1, 3, 6, 1, 2, 2, 4, 6, 9]

let linearCount = 0

function linearSearch(array, searchingItem) {
    for (let i = 0; i < array.length; i++) {
        linearCount += 1
        if (array[i] === searchingItem) {
            return i
        }
    }
    return null
}
console.log(linearSearch(linearArray, 9))
console.log('linearCount = ', linearCount)

/* Binary search */

const binaryArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

let binaryCount = 0

function binarySearch(array, searchingItem) {
    let start = 0
    let end = array.length
    let middle
    let found = false
    let position = -1
    while (found === false && start <= end) {
        binaryCount += 1
        middle = Math.floor((start + end) / 2)
        if (array[middle] === searchingItem) {
            found = true
            position = middle
            return position
        }
        if (searchingItem < array[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
    return position
}
console.log(binarySearch(binaryArray, 9))
console.log('binaryCount = ', binaryCount)

/* Recursive binary search */

let recursiveBinaryCounter = 0
function recursiveBinarySearch(array, item, start, end) {
    let middle = Math.floor((start + end) / 2)
    recursiveBinaryCounter +=1
    if (item === array[middle]) {
        return middle
    }
    if (item < array[middle]) {
        return recursiveBinarySearch(array, item, start, middle - 1)
    } else {
        return recursiveBinarySearch(array, item, middle + 1, end)
    }
}

console.log(recursiveBinarySearch(binaryArray, 12, 0, binaryArray.length))
console.log('recursiveBinaryCounter = ', recursiveBinaryCounter)
