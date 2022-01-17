

/* Array sorting methods */


/* forEach */

// let a = ["a", "b", "c"];
// a.forEach(function(entry) {
//     console.log(entry);
// });


// let arr = ["Яблоко", "Апельсин", "Груша"];

// arr.forEach(function (item, i, arr) {
//     console.log("item: " + item + ", i: " + i + ", arr: " + arr);
// });


/* Filter */

// let arr = [1, -1, 2, -2, 3];
// let positiveArr = arr.filter(function(item, i,arr) {
//     console.log("item: " + item + ", i: " + i + ", arr: " + arr);
//   return item > 0;
// });
// console.log( positiveArr );

// let arr = [1, -1, 2, -2, 3];
// let positiveArr = arr.filter((item, i,arr)=>{
//     console.log("item: " + item + ", i: " + i + ", arr: " + arr);
//   return item > 0;
// });
// console.log( positiveArr );

/* Every, Some */

// var arr = [1, -1, 2, -2, 3];
// function isPositive(number) {
//   return number > 0;
// }
// console.log( arr.every(isPositive) ); // false, не все положительные
// console.log( arr.some(isPositive) ); // true, есть хоть одно положительное


/* Reduce, right reduce */

// const arr = [1, 2, 3, 4, 5]
// const result = arr.reduce((prevValue, currentValue,index,array) => {
//     console.log("prevValue: " + prevValue + ", currentValue: " + currentValue + ", index: " + index + ", array: " + array)
//     return (prevValue + currentValue)
// },0);

// console.log(result); // 15

// reduceRight все тоже самое что и reduce но только начинает обработку с конца массива

// const arr = [1, 2, 3, 4, 5]
// console.log(Array.prototype)