//Arrays in JS: Collection of similar grouped items
// let marks = [97, 87, 88, 93, 82, 90];
// console.log(marks);
// console.log(marks.length); //property

// //Array indices
// let names = ["Aayush", "Anmol", "Anudan", "Ankit"];
// console.log(names);
// console.log(names[1]);
// console.log(names[1].length);

// names[3] = "Ankita";
// console.log(names);

//Looping over an Array

// let heroes = ["Spiderman", "Vision", "Captain America", "Antman", "Ironman", "Hawkeye", "Wanda"];
// let length = heroes.length;
// for(let idx = 0; idx<length; idx++){
//     console.log(heroes[idx]);
// }

//For-of
// for(let items of heroes){
//     console.log(items);
// }

//For in
// for(let items in heroes){
//     console.log(heroes[items]);
// }

//ARRAY METHODS

let items = ["bottle", "mouse", "speaker", "router", "charger"];
// console.log(items);
// items.push("SD Card", "Pen Drive", "Books");
// console.log(items);
// items.pop();
// console.log(items);
// console.log(items);
// console.log(items.toString());
let items2 = ["Trash Can", "Bed", "Pillow", "Bookshelf", "Table"];
let items3 = items.concat(items2);
// console.log(items3);

// items3.unshift("Cap");
// console.log(items3);

// items3.shift();
// console.log(items3);

console.log(items.slice(1,4));

console.log(items.splice(0,2,"Airpods", "headphones", "earphones"));
