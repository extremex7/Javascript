// let num = prompt("Enter a number: ");
// if(num % 5 === 0){
//     console.log(num, "The number is multiple of 5");
// } else {
//     console.log(num, "is not a multiple of 5");
// }

let marks = prompt("Enter your marks: ");
if(marks >= 90 && marks <= 100){
    console.log("Your grade is A");
} else if(marks >= 70 && marks <= 89){
    console.log("Your grade is B");
} else if(marks >= 60 && marks <= 69){
    console.log("Your grade is C");
} else if(marks >= 50 && marks <= 59){
    console.log("Your grade is D");
} else if(marks >= 0 && marks <= 49){
    console.log("You have failed!");
} else {
    console.log("Invalid input!");
}