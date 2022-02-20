/* selection sort */

const array = [-100, 2, 5, 7, 5, -43, 3, 5, 32, 2, 5, 7, 9, 1, 2, 5, 7, 3, 7, 9, 0, 1, 2, 7, 8, 9, 10, 11, 14]
let selectionCounter = 0

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[indexMin]) {
                indexMin = j
            }
            selectionCounter += 1
        }
        let temp = array[i]
        array[i] = array[indexMin]
        array[indexMin] = temp
    }
    return array
}
console.log(selectionSort(array))
console.log('selectionCounter = ', selectionCounter)

/* Bubble sort */
let bubbleCounter = 0

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j + 1] < array[j]) {
                let temp = array[j + 1]
                array[j + 1] = array[j]
                array[j] = temp
            }
            bubbleCounter += 1
        }
    }
    return array
}

console.log(bubbleSort(array))
console.log('bubbleCounter = ', bubbleCounter)

/* Quick sort (recursive)*/

let quickCouner = 0
function quickSort(array) {
    if (array.length <= 1) {
        return array
    }
    let pivotIndex = Math.floor(array.length / 2)
    let pivot = array[pivotIndex]
    let less = []
    let greater = []
    for (let i = 0; i < array.length; i++) {
        quickCouner += 1
        if (i === pivotIndex) {
            continue
        }
        if (array[i] < pivot) {
            less.push(array[i])
        } else {
            greater.push(array[i])
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.log(quickSort(array))
console.log('quickCouner = ', quickCouner)
