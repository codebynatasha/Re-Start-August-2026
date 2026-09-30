// Variables & Scope 
// Types of Variables (var, let, const) 

// let was introduced in ES6 (ECMAScript 2015), which was released in 2015.[cite: 1]
//Avoid var (variable re-declaration, block scope, hoisting confusion, accidental )[cite: 1]

// var name="Ali";
// // var name="Cihan"; var can be re-declare, that's the language error. if we use let instead var it give us a error.
// console.log(name)

// let name="Ali";
// name="Ali";
// console.log(name)

// Same output, but var not block scope.

// const cnic="123";
// // cnic="34"; if we try to change it, he didn't & show an error, because const can't be change. 
// console.log(cnic) 

// Scope Type: Globle Functional Block

let name ="cihan" //Globle
console.log(name)

function greet(){  //Functional, can't be accessible from outside function.
    let surname ="Albora"
    // var surname ="Albora" But if go with var, it can be accessible.
    console.log(surname);  
}
// console.log(surname); if called it outside the function, it can't be accessible, & give error.
greet(); // Function call

if (true) {
    let age ="40"
    // var age ="40" But if go with var, it can be accessible.
    console.log(age);  
}
// console.log(age); likewise Function it can't be accessible from outside.

// Hoisting (NOT for practical, but for interview pov)
console.log(a)
var a ="5"; // undefined // if we use let instead, it give us an error.

// why? because js initializing it but didn't setting his value. so, if under the hood these commands are running, it means that JS are managing like below
var a;
console.log(a);
a = 5; //5

