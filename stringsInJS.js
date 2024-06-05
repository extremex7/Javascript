// let str = "Aayush";//Double quotes
// let str2 = 'Sapkota';//single quotes
// let length = str.length;
// console.log(length);
// console.log(str[3]);


//Template Literals
// let TempLiteral = `This is a template Literal`;
// console.log(TempLiteral);

// let obj = {
//     name : "Pen",
//     price : 10,
// };
// let output = `The cost of ${obj.name} is ${obj.price} rupees!`
// console.log(output);

//Escape Characters & Tab Space
// console.log("This \tis \tTabbed \tSpace");
// console.log("Name: Aayush Sapkota \nAge: 23 \nCGPA: 3.68");

//String Methods

let str = "aayush";
let str2 = "HELLO";
let str3 = "   This has whitespaces   ";
console.log(str.toUpperCase()); //Converts the string to uppercase.
console.log(str2.toLowerCase()); //Converts the string to lowercase.
console.log(str3.trim()); // Removes whitespaces from start and end of the string.

console.log(str2.slice(0,4)); // returns part of string

console.log(str.concat(str2)); // Joins str2 with str
console.log(str2+str); //+ can be used to concatinate

console.log(str2.replace("LO","EW")); //Replaces old value of a string with new value

console.log(str.charAt(3)); // Returns the character in a string according to index value.
console.log(str[3]);