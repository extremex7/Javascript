let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let div1 = document.querySelector(".div1");

//events
// btn1.onclick = () => {
//     console.log("button 1 was clicked.");
// }

// btn2.ondblclick = function(){
//     console.log("you clicked buttton 2 two times");
// }

// div1.onmouseover = () => {
//     console.log("You are inside div.");
// }

// div1.onmouseleave = () => {
//     console.log("You left div.");
// }

// btn1.onmouseover = () => {
//     btn1.style.cursor = "pointer";
// }

// btn2.onmouseover = (evt) => {
//     btn2.style.cursor = "grab";
//     console.log(evt);
//     console.log(evt.target);
// }

//event listeners

const rf = () => {
    console.log("button 1 was clicked.");
};
btn1.addEventListener("click", rf);
// btn1.removeEventListener("click", rf);

let toggle = document.querySelector("#toggle");
let body = document.querySelector("body");
let currToggle = "light";

toggle.addEventListener("click", () => {
    if(currToggle === "light") {
        currToggle = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
        // body.style.backgroundColor = "black";
    } else {
        currToggle = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        // body.style.backgroundColor = "white";
    }
    console.log(currToggle);
});