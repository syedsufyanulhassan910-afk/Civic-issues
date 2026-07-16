//  5. Closures (Memory Retention)

// function createCounter() {
//   let count = 0; 
 
//   return function() {
//     count++; 
//     return count;
//   };
// }


// const counter = createCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());


//  1. Functions in JavaScript

// A. Function Declaration

// function greet(name) {
//   return `Hello, ${name}!`;
// }
// console.log(greet("Ali"));


// B. Function Expression

// const greetExpression = function(name) {
//   return `Hello, ${name}!`;
// };
// console.log(greetExpression("Sara"));


// C. Arrow Functions (ES6)

// const greetArrow = (name) => `Hello, ${name}!`;
// console.log(greetArrow("Zain"));


// 2. Timeouts (setTimeout & setInterval)

// A. setTimeout (Run ONCE after a delay)

// console.log("Start");

// setTimeout(() => {
//   console.log("This runs after 2 seconds!");
// }, 2000);

// console.log("End");


// B. setInterval (Run REPEATEDLY)

// let count = 0;

// const intervalId = setInterval(() => {
//   count++;
//   console.log(`Tick ${count}`);
  
//   if (count === 3) {
//     clearInterval(intervalId);
//     console.log("Stopped!");
//   }
// }, 1000);


// 3. Callbacks (Functions as Arguments)

// function processPayment(amount, callback) {
//   console.log(`Processing payment of $${amount}...`);
  
  
//   setTimeout(() => {
//     console.log("Payment successful!");
//     callback(); 
//   }, 2000);
// }

// function sendEmailReceipt() {
//   console.log("Receipt sent to user's inbox. 📧");
// }

// processPayment(150, sendEmailReceipt);


// The this Keyword

// const person = {
//   name: "Hamza",
//   greet: function() {
   
//     console.log(`My name is ${this.name}`);
//   },
//   greetArrow: () => {
    
//     console.log(`My name is ${this.name}`); 
//   }
// };

// person.greet();      
// person.greetArrow();