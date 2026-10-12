// Why do we need functions? 
// Function declaration: Basic syntax
// Function call: "Button press" concept
// Parameters: Passing data into a function
// Arguments vs parameters
// Multiple parameters
// Return values: Result
// console.log vs return
// Function expression
// Declaration vs expression (hoisted)
// Common beginner mistakes

// Basic syntax
// function greet (){ //parameters
//     // Piece of code
//     console.log("aoa")
// }

// greet ()  // Function Call

// Parameters: Passing data into a function
// function greet (name){  
//     // Piece of code
//     console.log("Marhaba", name); // it should be same 
// }

// // Multiple parameters
// greet ("Deniz") ;
// greet ("Alya") ;
// greet ("Nare"); 

// function add (a, b){ //parameters
//     // Piece of code
//     console.log(a + b)
// }

// add ( 4, 3) 
// add ( 2, 3)



// Return values: Result
// function add (a, b){ //parameters
//     return a + b;
// }    
// const score = add (3,8);   
// console.log(score);

// Function expression
// const sayAoa = function (){
//     // Piece of Code 
//     console.log("sayAoa");
// };
// sayAoa();

// Declaration vs expression (hoisted)
greet ( ); 
function greet (name){  
   // Piece of code
    console.log("Marhaba" ); 
}

// expression (hoisted)
// sayHey(); // hoisted
const sayHey= function (){
    // Piece of Code 
    console.log("sayAoa"); // Cannot access 'sayHey' before initialization
};

// Function Part 2
// Normal Function
function greet(name) {
    return "Hello " + name;
}

// Function Expression
// const greet = function(name) {
//     return "Hello " + name;
// };

// Arrow Function
// const deliveryCharges = (km) => km * 20;

// console.log(deliveryCharges(5));
// Output: 100

// Single Parameter
const Square =(n) => {
    return n * n;
}

console.log(Square(3));

// Delivery Example 
const deliveryCharges = (km) => km * 20;
console.log(deliveryCharges(6));

// Order Example 
function Order(item, quantity =1) {
console.log(item, "X", quantity);
}

Order("Burger", 7);
Order("Pizza"); 

// Rested Parameter
const showNumber = (...Numbers) =>{
    console.log("Number:", Numbers);
}

showNumber (4, 5, 3)
showNumber (1, 2, 7)

// Practical Example
function totalMarks(...marks){
let total = 0;
for (let mark of marks){
    total += mark;
}
return total;
}

console.log(totalMarks(80, 60, 45));