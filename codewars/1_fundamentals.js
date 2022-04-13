
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

// Write a function that returns both the minimum and maximum number of the given list/array.

function minMax(arr) {
  let min = arr[0]
  let max = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
    if (arr[i] < min) {
      min = arr[i]
    }
  }
  return [min, max]
}

// console.log(minMax([1, 2, 3, 4, 5])) // [1, 5]

// There is a bus moving in the city, and it takes and drop some people in each bus stop.
// You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.
// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D
// Take a look on the test cases.
// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.
// The second value in the first integer array is 0, since the bus is empty in the first bus stop.


let number = function (busStops) {
  let people = 0;
  busStops.forEach(a => people = people + a[0] - a[1]);
  return people
}

// console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])) // 17


// This time no story, no theory. The examples below show you how to write function accum:
// 
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt

function accum(s) {
  var letters = str.split('');
  var result = [];
  for (var i = 0; i < letters.length; i++) {
    result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
  }
  return result.join('-');
}

// console.log(accum("ZpglnRxqenU")) // "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"

// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
// The input to the function will be an array of three distinct numbers (Haskell: a tuple).
// For example:
// gimme([2, 3, 1]) => 0

function gimme(triplet) {
  let min = triplet[0]
  let max = triplet[0]
  let betweenId = 0
  for (let i = 0; i < triplet.length; i++) {
    if (triplet[i] > max) {
      max = triplet[i]
    }
    if (triplet[i] < min) {
      min = triplet[i]
    }
  }
  for (let j = 0; j < triplet.length; j++) {
    if (triplet[j] < max && triplet[j] > min) {
      betweenId = j
      break
    }
  }
  return betweenId
}

console.log(gimme([2, 3, 1])) // 2

// You will be given an array and a limit value. 
// You must check that all values in the array are below or equal to the limit value. 
// If they are, return true. 
// Else, return false.
// You can assume all values in the array are numbers.

function smallEnough(a, limit) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] > limit) {
      return false
    }
  }
  return true
}

// console.log(smallEnough([78, 117, 115], 120)) // true
// console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)) // false




