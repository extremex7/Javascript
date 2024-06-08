// For a given array with marks of students- >[85, 97, 44, 37, 76, 60].
// Find the average marks of the entire class.

// let marks = [85, 97, 44, 37, 76, 60];
// let length = marks.length;
// let sum  = 0;

//USING FOR LOOP
// for(let i = 0; i < length; i++){
//     sum = sum + marks[i];    
// }
// let avg = sum / length;
// console.log(avg);

//USING FOR OF LOOP
// for(let items of marks){
//     console.log(items);
//     sum = sum + items;
// }
// let avg = sum / length;
// console.log(avg);

//USING FOR IN LOOP
// for(let items in marks){
//     console.log(marks[items]);
//     sum = sum + marks[items];
// }
// let avg = sum / length;
// console.log(avg);


//For a given array with prices of 5 items-> [250, 645, 300, 900, 50]
//All items have an offer of 10% OFF on them. Change the array to store final price
// after applying offer.

// let price = [250, 645, 300, 900, 50];
// let length = price.length;
// let discount = 10 / 100;
// let val;
// console.log("Value before discount: ");
// for(val of price){
//     console.log(val);
// }
// console.log("Value after discount: ");
// for(val of price){
//     val -= (val*discount);
//     console.log(val);
// }

//Array Methods in JS

//Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
//a. Remove the first company from the array
//b. Remove Uber and Add Ola in its place
//c. Add Amazon at the end.

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

console.log("Removing first company from the array");
// companies.splice(0,1);
companies.shift();
console.log(companies);

console.log("Removing Uber and adding OLA in its place");
companies.splice(1,1,"OLA");
console.log(companies);

console.log("Add Amazon at the end");
companies.push("Amazon");
console.log(companies);