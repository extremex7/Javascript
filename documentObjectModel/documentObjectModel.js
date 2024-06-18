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
// let heading  = document.getElementsByClassName("heading");
// console.dir(heading);


// //selecting with tag
// let paras = document.getElementsByTagName("p");
// console.log(paras);

// //selecting with querySelector
// let que = document.querySelector("h1");
// console.log(que);


// let div = document.querySelector("div");
// let id = div.getAttribute("id");
// console.log(id);

// div.setAttribute("id", "newBox");
// console.log(div);

// let div = document.querySelector("div");
// console.log(div);

// div.style.backgroundColor = "green";
// div.style.fontSize = "26px";

let btn = document.createElement("button");
btn.innerText = "click here";
console.log(btn);
let div = document.querySelector("div");
div.after(btn);

// div.remove();