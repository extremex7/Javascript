//window object
// The window obkect represents an open window in a browser. It us browsers object(not javascripts)
// and is automatically created by the browser.
//It is a global object with lots of properties and methods
// console.log(window);
// console.log("HELLO");
//window.console.log("hello");

//DOM: Document Object Model
//when a web page is loaded, the browser creates a Document Object Model(DOM)
//of the page
// document.body.style.background = "green";

//DOM Manipulation

//Selecting with id
// let heading = document.getElementById("heading");
// console.dir(heading);

//selecting with class

let heading  = document.getElementsByClassName("heading");
console.dir(heading);