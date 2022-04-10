
// Take 2 strings s1 and s2 including only letters from ato z. 
// Return a new sorted string, the longest possible, containing distinct letters, each taken only once - coming from s1 or s2.
function longest(s1, s2) {
  const set = new Set(s1 + s2)
  let array = [...set].sort().join('')
  return array
}

// console.log(longest("aretheyhere", "yestheyarehere")) // "aehrsty"
// console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")) // "abcdefghilnoprstu"
// console.log(longest("inmanylanguages", "theresapairoffunctions")) // "acefghilmnoprstuy"

// Implement a function that accepts 3 integer values a, b, c. 
// The function should return true if a triangle can be built with the sides of given length and false in any other case.
// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0)
    return false;

  if (a + b > c && a + c > b && c + b > a)
    return true;
  else
    return false;
}
// console.log(isTriangle(1,2,2) ) //true
// console.log(isTriangle(7,2,2) ) //false

//Given a list of integers, determine whether the sum of its elements is odd or even.
//Give your answer as a string matching "odd" or "even".
//If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(array) {
  if (array.lenght === 0) {
    return 'even'
  }
  return array.reduce((prev, next) => prev + next, 0) % 2 ? 'odd' : 'even'
}

// console.log(oddOrEven([0]))// 'even'
// console.log(oddOrEven([1]))// 'odd'
// console.log(oddOrEven([]))// 'even'

// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:
// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

// For example:
// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
function solve(string) {
  let sumLowercase = 0
  let sumUppercase = 0
  const array = string.split('')
  array.forEach(arr => {
    const toLowerCase = arr.toLowerCase()
    if (toLowerCase === arr) {
      sumLowercase++
    } else {
      sumUppercase++
    }
  })
  return sumUppercase > sumLowercase ? string.toUpperCase() : string.toLowerCase()
}

// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.
// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).
// If the score < 0, return 0.
// 
// For example:
// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

function checkExam(array1, array2) {
  let sum = 0
  for (let i = 0; i < array1.length; i++) {
    if (array2[i] === '') {
      continue
    } else if (array1[i] === array2[i]) {
      sum += 4
      continue
    } else {
      sum--
    }
  }
  return sum < 0 ? 0 : sum
}

// console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])) // 6

// remove all text after #
function removeUrlAnchor(url) {
  let array = url.split('')
  let index
  for (let i = 0; i < array.length; i++) {
    if (array[i] === '#') {
      index = i
    }
    if (index) {
      array[i] = ''
    }
  }
  return array.join('')
}

// console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'))  // www.codewars.com/katas/?page=1

// Write a function named sumDigits which takes a number as input 
// and returns the sum of the absolute value of each of the number's decimal digits.
function sumDigits(number) {
  number = String(Math.abs(number))
  let array = number.split('')
  return array.reduce((prev, next) => Number(prev) + Number(next), 0)
}

// console.log(sumDigits(-32)) // 5
// console.log(sumDigits(10)) // 1

// Your task is to make a function that can take any non-negative integer as an argument 
// and return it with its digits in descending order. 
// Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(number) {
  return Number(String(number).split('').sort((a, b) => b - a).join(''))
}

// console.log(descendingOrder(15)) //