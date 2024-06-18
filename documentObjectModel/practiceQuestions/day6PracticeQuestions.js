// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + " from Aayush Sapkota";

// let divs = document.querySelectorAll(".box");
// let i = 1;
// for (let div of divs){
//     div.innerText  = `new unique value ${i}`;
//     i++;
// }

let btn = document.createElement("button");
btn.innerText = "click me!";
btn.style.backgroundColor = "red";
btn.style.color = "white";

let body = document.querySelector("body");
// console.log(body);
body.prepend(btn);

let p = document.querySelector(".test");
console.log(p.innerText);

p.classList.add("test2");