//Print all even numbers from 0 to 100

// let i;
// for(i=1; i<=100; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

//Create a game where tou start with any random game number. Ask the user to
//keep guessing the game number until the user enters correct value.

// let gameNumber = 55;
// let userAnswer = prompt("Guess a number: ");
// while(userAnswer != gameNumber){
//     userAnswer = prompt("Wrong guess, Try again!!");
// }
// console.log("Correct guess!!");


//Prompt the user to enter their funn name. Generate a username for them based
// on the input. Start username with @, followed by their full name and ending
// with the fullname length. eg: name = "aayush", username should be "@aayush6"

let name = prompt("Enter your name: ");
let nameLength = (name.length - 1);
let noSpaceName = name.replace(/\s/g, "");
let username = `@${noSpaceName.toLowerCase()+nameLength}`;
console.log(`Your username is ${username}`);