//Create a function using the "function" keyword that takes a String as an argument
// and returns the number of vowels in the string.

//let input = prompt("Enter a String");

// function countVowels(input){
//     let count = 0;
//     for(const char of input){
//         if(char === "a" || char === "e" || char == "i" || char === "o" || char === "u" ||
//         char === "A" || char === "E" || char == "I" || char === "O" || char === "U"){
//             count += 1;
//         }
//     }
// return count;
// }

// console.log(countVowels(input));


//Arrow funtion to perform the same task.

// let str = prompt("Enter a string:");

// const countVowels = (str) => {
//     let count = 0;
//     for(char of str){
//         if(char === "a" || char === "A" || char === "e" || char === "E" || 
//         char === "i" || char === "I" || char === "o" || char === "O" || 
//         char === "u" || char === "U"){
//             count ++;
//         }
//     }
//     return count;
// }

// console.log(countVowels(str));




//METHODS

// For a given array of numbers. print the square of each value using the forEach loop.

// let arr = [2, 3, 4, 5, 6];

// arr.forEach((val) => {
//     console.log(`The square of ${val} is ${val * val}`);
// });


//We are given array of marks of students. Filter out the marks of students that
//scored 90+

let marks = [80, 93, 94,98, 89, 77, 65, 59, 69, 90];

let result = marks.filter((val) => {
    return val > 90;
});
console.log(result);


//Take a number n as an input from the user. Create an array of numbers from 1 to n.
// Use the reduce method to calculate sum of all numbers in the array.
//Use the reduce method to calculate product of all numbers in the array / Factorial

let n = prompt("Enter a number:");

let arr =[];

for(let i = 1; i <= n; i++){
    arr[i-1] = i;
}

let sum = arr.reduce((pre, curr) => {
    return pre + curr;
})
console.log(sum);

let fact = arr.reduce((pre, curr) => {
    return pre * curr;
})
console.log(fact);