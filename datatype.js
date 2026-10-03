// Data Type in JS
// Primitive & Non-Primitive
// Primitive = Pre-Define 
// string, number (int, float) , boolean, undefined, null.

let name = 'Waleed'; //string
// let age = '24'; //string
let age = 24; // number 
let height = 2.4; //float
let isStudent = true; // boolean
let exam; //undefined
let city = null; // null

// Non-Primitive
// Object & Arrays
let user = {name:"waleed", age:"24", gender:"pefer not say"} //Object 
console.log(user.gender)
// console.log(user["gender"]) // Not recommended

// Arrays
let car=["Toyota", "BMW" , "24"];
console.log(car[0])

//Change type of variables
let marks="75";
// marks = Number (marks); // variable Change function
marks = String (marks); // variable Change function
console.log(typeof marks);
