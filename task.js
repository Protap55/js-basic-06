// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']

// const colors = ["red", "blue", "green", "yellow", "orange"];
// let reverseCol = [];
// for (let col of colors) {
//   console.log(col);
//   reverseCol.unshift(col);
// }
// console.log(reverseCol);

// Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.

// Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

// Output:

// [12, 98, 76, 46]

// const numbers = [12, 98, 5, 41, 23, 78, 46];
// let nums = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     nums.push(numbers[i]);
//   }
// }
// console.log(nums);

// // Task 3
// // Use a for...of loop to concatenate all the elements of an array into a single string.

// // Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// // Output:

// // 'TomTimTinTik'

// var numbers = ["Tom", "Tim", "Tin", "Tik"];
// let nums = "";
// for (let num of numbers) {
//   nums = nums + num;
// }
// console.log(nums);

// // Task 4 (Hard)
// // Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// // Input: const statement = 'I am a hard working person'

// // Output:

// // 'person working hard a am I'

// const statement = "I am a hard working person";
// let stat = statement.split(" ").reverse();
// let modStartements = "";
// for (let sta of stat) {
//   modStartements += sta + " ";
// }

// console.log(modStartements.trim());

// Task 5
// Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

// Input: [1, 2, 3]

// Expected Output:

// Original: [1, 2, 3] Copy: [99, 2, 3]

// let numbers = [1, 2, 3];
// let num = [...numbers];
// num[0] = 99;
// console.log(numbers);
// console.log(num);

//  // Given an array of student objects, print each student’s name and marks.

// // [
// //   { name: "John", marks: 85 },
// //   { name: "Alice", marks: 90 }
// // ]

// let students = [
//   {
//     name: "John",
//     marks: 85,
//     sub: "Physics",
//   },
//   {
//     name: "Alice",
//     marks: 90,
//     sub: "Biology",
//   },
// ];

// for (let student of students) {
//   console.log(`name: ${student.name}, marks: ${student.marks}`);
// }

// Given a 2D array, update the value at second row first item to 99 and print the updated array.

// input:

// [
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ]
// Expected Array:

// [
//   [1, 2],
//   [99, 4],
//   [5, 6]
// ]

let arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

let arr2 = [].concat(arr);

arr2[1][0] = 99;
console.log(arr2);
console.log(arr);
