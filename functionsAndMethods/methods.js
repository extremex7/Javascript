//forEach loop in Arrays : forEach is a method.
//A callback function is a function passed as an argument in another function.
let arr = ["Aloo", "Biryani", "Chicken", "Tandoori"];
let arrn = [2, 4, 5, 6, 7, 8];
// arr.forEach((val, idx, arr) => { //parameters in foreach are Value, Index and Array itself
//     console.log(val.toUpperCase(), idx, arr);
// });

//Higher order functions/ methods: functions/ methods that can take other functions
// as a parameter or can return another function as an output.


//Map method: Creates a new array with the results of some operation. The value
// its callback returns are used to form new array

// let newArr = arr.map((val) => {
//     return val;
// });
// console.log(newArr);

//Filter Method: Creates a new array of elements that give true for a condition/ filter

// let newArr = arrn.filter((val) => {
//     return val > 5;
// })

// console.log(newArr);


//Reduce Method: Performs some operations & reduces the array to a single value.
//It returns that single value

const array1 = [5, 6, 1, 2, 7, 3, 4];
const output = array1.reduce((res, curr) => {
    return res > curr ? res : curr;
});
console.log(output);