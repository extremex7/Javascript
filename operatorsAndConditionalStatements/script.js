//Operators in JS
//Arithmetic Operators
// let a = 5;
// let b = 2;
// console.log("Values:        a = ", a, " & b = ", b);
// console.log("Sum:           a + b = ", a + b);
// console.log("Difference:    a - b = ", a - b);
// console.log("Product:       a * b = ", a * b);
// console.log("Division:      a / b = ", a / b);
// console.log("Modulus:       a % b = ", a % b);
// console.log("Exponential:   a ^ b = ", a ** b);

//Unary Operators
// let a = 5;
// let b = 2;
// let c = 10;
// let d = 20;
// console.log("Values:        a = ", a, " & b = ", b, "c = ", c, " & d = ", d);
// console.log("Pre Increment:     ++a = ", ++a); //Pre Increment/ Decrement operators first perform the increment/ decrement function and print function after that.
// console.log("a = ", a);
// console.log("Post Increment:    b++ = ", b++); // Post Increment/ Decrement operators first perform the print operation first and increment/ decrement after that.
// console.log("b = ", b);
// console.log("Pre Decrement:     --c = ", --c); //Pre Increment/ Decrement operators first perform the increment/ decrement function and print function after that.
// console.log("c = ", c);
// console.log("Post Decrement:    d-- = ", d--); // Post Increment/ Decrement operators first perform the print operation first and increment/ decrement after that.
// console.log("d = ", d);

//Assignment Operators

// let a = 5;
// let b = 10;

// a += 4; // a = a + 4
// console.log("a = ", a);

// b -= 4; // b = b - 4
// console.log("b = ", b);


//Comparison Operators
//Equals to ==
//Not Equals to !=
//Equals to and Type ===
//Not Equals to and type !==

// let a = 5;
// let b = 2;
// let c = 5;
// let d = "2";
// console.log("a == b: ", a == b);
// console.log("a == c: ", a == c);
// console.log("a != b: ", a != b);
// console.log("a != c: ", a != c);
// console.log("b = d: ", b == d); //True because JS first implicitly converts string into integer.
// console.log("b === d: ", b === d); //Strictly checks data type
// console.log("b !== d: ", b !== d); //Strictly checks data type
// console.log("a > b: ", a > b);
// console.log("a < b: ", a < b);
// console.log("a >= b: ", a >= c);
// console.log("a <= b: ", a <= b);


//Logical Operators

// let a = 5;
// let b = 2;
// let cond1 = a > b;
// let cond2 = a === b;
// //AND
// console.log("AND returns true if both conditions are true else it returns false");
// console.log("a AND b = ", cond1 && cond2);

// //OR
// console.log("OR returns true if even one conditions is true and prints false only if both condition is false.");
// console.log("a OR b = ", cond1 || cond2);

// //NOT
// console.log("NOT returns True if False is entered and vice versa")
// console.log(!cond1);


//Conditional Operators
//IF-ELSE
// let age = 20;
// if(age >= 18){
//     console.log("Can Vote");
// } else {
//     console.log("Cannot Vote");
// }

// let mode = "dark";
// let color;
// if(mode === "dark"){
//     color = "black";
// }
// if(mode === "light"){
//     color = "white";
// }
// console.log(color);

// let num = 5;
// let mod = num % 2; 
// if(mod === 0){
//     console.log(num, "is Even");
// } else {
//     console.log(num, "is Odd");
// }

//ELSEIF

// let a = 2;
// let b = 3;
// let c = 4;
// if(a>b && a>c){
//     console.log(a, "is greater");
// } else if(b>a && b>c){
//     console.log(b, "is greater");
// } else { 
//     console.log(c, "is greater");
// }


// //Ternary Operator: Conpact if else statement
// let age = 16;
// let result = age >= 18 ? "Vote" : "No vote";
// console.log(result);

// let num = 5;
// num % 2 === 0 ? console.log("even") : console.log("Odd");

