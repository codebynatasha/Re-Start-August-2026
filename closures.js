// Explain lexical scope
"Function apne surrounding area ke variables ko access kar sakta hai, based on where it is written in code."

function outer() {
  let course = 'MERN';

  function inner() {
    console.log(course);
  }

  inner();
}

// Now explain closure
function outer() {
  let name = "Kaya";

  function inner() {
    console.log(name);
  }

  return inner;
}

const myFunction = outer();

myFunction();

// Inner Function + Outer Function Variables = Closure

function createBankAccount() {
  let balance = 500;

  return {
    checkBalance: function () {
      return balance;
    },

    deposit: function (amount) {
      balance = balance + amount;
      return balance;
    },
  };
}

const account = createBankAccount();

console.log(account.checkBalance());
console.log(account.deposit(500));

//   Discount calculator
function createDiscount(discount) {
  return function (price) {
    return price - (price * discount) / 100;
  };
}

const studentDiscount = createDiscount(20);
const specialDiscount = createDiscount(50);

console.log(studentDiscount(1000));
console.log(specialDiscount(1000));

// //  Btn Example in Backend
// function setupButton(message) {
//   const button = document.querySelector("#btn");

//   button.addEventListener("click", function () {
//     alert(message);
//   });
// }

// setupButton("Welcome to JavaScript Closures"); // Yeh Brower pr run hoga.

function createApi(baseUrl) {
  return function (endpoint) {
    return baseUrl + endpoint;
  };
}

const api = createApi("https://api.example.com");

console.log(api("/users"));
console.log(api("/products"));
 
 
 
 
