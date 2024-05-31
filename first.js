/* name = "Aayush Sapkota";
console.log("Name: "+name);
age = 24;
console.log("Age: "+age);
x = null;
y = undefined;
console.log(null);
console.log(undefined);
isFollowing = false;
console.log("Following? "+isFollowing)
console.log("JS is dynamically typed.");
name = 25;
console.log(name);
name = isFollowing;
console.log(name); */
// let, const & var
// let: Cannot be re-declared but can be updated. A block scope variable.
// var: Can be re-declared and can be updated, as a good programmer don't use var. A global scope variable.
// const: cannot be re-declared or updated. A block scope variable.
let address = "Nepal";
console.log(address);
let region = "South Asia";
console.log(region);

region = "Asia";
console.log(region);
const planet = "Earth";
console.log(planet);
// planet = "Jupiter";
// console.log(planet); // This will give an error, since we are trying to assign a new value to a const variable

//Data Types in JS
//Primitive data types(7):
// String, Number, Boolean, Undefined, Null, BigInt, Symbol.
//Non-Primitive data types:
// Objects: Arrays, Functions.
// key : value
const student4607 = {
    name : "Aayush Sapkota",
    age : 24,
    cgpa: 3.8,
    isPass: true
};
console.log(student4607["age"]);
console.log(student4607.cgpa);

