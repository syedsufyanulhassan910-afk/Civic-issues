// SESSION 1: Promises & Asynchronous Flow 

// Instructor Teaching Note: Start by explaining that JavaScript is single-threaded (it can only do one thing at a time). Asynchronous programming is how we handle slow network requests without freezing the UI.




// 1.Understanding Promises & States

// Quick Concept
// A Promise is like a receipt at a fast-food counter. You don't have your burger yet, but you hold a promise that you will either get your food (Fulfilled) or be told they ran out of ingredients (Rejected).

// The 3 Promise States
// 1.Pending: Initial state, operation is ongoing.
// 2.Fulfilled (.then()): Operation succeeded, data is ready.
// 3.Rejected (.catch()): Operation failed, error returned.

//        ┌────────────────────────┐
//        │   PROMISE (Pending)    │
//        └───────────┬────────────┘
//                    │
//          ┌─────────┴─────────┐
//          ▼                   ▼
// ┌─────────────────┐ ┌──────────────────┐
// │  Fulfilled      │ │    Rejected      │
// │  .then()        │ │    .catch()      │
// └─────────────────┘ └──────────────────┘

// example:

// const checkServerStatus = new Promise((resolve, reject) => {
//   const isServerOnline = false;

//   setTimeout(() => {
//     if (isServerOnline) {
//       resolve("🟢 Server is online and healthy!");
//     } else {
//       reject("🔴 Server connection failed!");
//     }
//   }, 2000);
// });

// // Consuming the Promise
// checkServerStatus
//   .then(response => console.log("Success:", response))
//   .catch(error => console.error("Error:", error));


// 2.Modern Async/Await Syntax

// Quick Concept

// async/await is syntactic sugar on top of Promises. It makes asynchronous code look and behave like synchronous, step-by-step code.

// 1.Add async to a function to make it return a Promise automatically.
// 2.Use await inside to pause execution until the Promise resolves.
// 3.Always wrap inside try/catch blocks to capture errors gracefully.

// Practical Example: Fetching User Profile


// const fetchUserData = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve({ id: 101, name: "Ali", role: "Developer" }), 3000);
//   });
// };

// async function loadUserProfile() {
//   try {
//     console.log("⏳ Fetching user data...");
    

//     const user = await fetchUserData(); 
    
//     console.log(`✅ User Loaded: ${user.name} (${user.role})`);
//   } catch (error) {
//     console.error("❌ Failed to fetch user profile:", error);
//   }
// }

// loadUserProfile();


// 3. Parallel Execution with Promise.all()

// Quick Concept

// When fetching independent pieces of data (e.g., product lists and site categories), don't fetch them sequentially! Running them in parallel saves total loading time.


// Sequential Execution:  [--- API 1 (1s) ---][--- API 2 (1s) ---] = Total: 2s
// Parallel (Promise.all): [--- API 1 (1s) ---]
//                        [--- API 2 (1s) ---]                      = Total: 1s


// Code Example: Dashboard Loader


// const fetchProducts = () => new Promise(res => setTimeout(() => res(["Laptop", "Phone"]), 1000));
// const fetchCategories = () => new Promise(res => setTimeout(() => res(["Electronics", "Gadgets"]), 1000));

// async function loadDashboard() {
//   console.time("Dashboard Load Time");

//   const [products, categories] = await Promise.all([
//     fetchProducts(),
//     fetchCategories()
//   ]);

//   console.log("Products:", products);
//   console.log("Categories:", categories);

//   console.timeEnd("Dashboard Load Time"); 
// }

// loadDashboard();

// 4.Promises & Async Flow (Deep Dive)

// What is a Promise?

// JavaScript is single-threaded (executes one piece of code at a time). When performing time-consuming tasks like API calls, reading files, or database queries, blocking the thread freezes the application.


// A Promise is a placeholder object for a future value that isn't available yet but will be resolved at some point.

//        ┌────────────────────────┐
//        │   PROMISE (Pending)    │
//        └───────────┬────────────┘
//                    │
//          ┌─────────┴─────────┐
//          ▼                   ▼
// ┌─────────────────┐ ┌──────────────────┐
// │  Fulfilled/     │ │    Rejected/     │
// │  Resolved       │ │    Failed        │
// │  .then()        │ │    .catch()      │
// └─────────────────┘ └──────────────────┘

// A Promise Has 3 States:

// 1.Pending: Initial state, operation is still in progress.
// 2.Fulfilled (Resolved): The operation completed successfully.
// 3.Rejected: The operation failed due to an error.

// A. Creating a Promise From Scratch:

// A promise constructor accepts a callback function with two parameter functions: resolve and reject.


// const checkServerStatus = new Promise((resolve, reject) => {
//   const isServerOnline = true;

//   setTimeout(() => {
//     if (isServerOnline) {
//       resolve({ status: "Connected", code: 200 });
//     } else {
//       reject(new Error("Server unreachable."));  
//     }
//   }, 2000);
// });

// checkServerStatus
//   .then((response) => {
//     console.log("Success:", response.status);
//   })
//   .catch((error) => {
//     console.error("Failure:", error.message);
//   })
//   .finally(() => {
//     console.log("Operation completed (Cleanup state).");
//   });