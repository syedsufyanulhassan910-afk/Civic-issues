/*=====================
  Object Destructuring
=======================*/ 

const user = {
  id: 101,
  username: "alex_dev",
  role: "admin",
  location: "Karachi"
};

const { username, role, salary = 50000, location: city } = user;

// console.log(username); 
// console.log(city);     
// console.log(salary);  

/*=====================
  Array Destructuring
=======================*/ 

const colors = ["Red", "Green", "Blue", "Yellow"];

const [firstColor, secondColor, , fourthColor] = colors;

// console.log(firstColor); 
// console.log(fourthColor);

/*============================
   Spread Operator — Unpacking
==============================*/

const frontend = ["HTML", "CSS", "JS"];
const backend = ["Node.js", "Express", "MongoDB"];

const fullStack = [...frontend, ...backend, "Git"];
// console.log(fullStack); 

const defaultSettings = { theme: "light", notifications: true };
const userSettings = { theme: "dark" };

const finalConfig = { ...defaultSettings, ...userSettings };
// console.log(finalConfig);

/*============================
   Rest Operator — Packing
==============================*/

function calculateTotal(tax, ...prices) {
  const subtotal = prices.reduce((acc, curr) => acc + curr, 0);
  return subtotal + tax;
}

// console.log(calculateTotal(10, 100, 200, 50)); 


const student = { name: "Hadi", grade: "A", age: 19, city: "Karachi" };
const { name, ...otherDetails } = student;

// console.log(name);
// console.log(otherDetails); 

/*===========================
    Optional Chaining (?.)
=============================*/

const response = {
  status: 200,
  data: {
    user: {
      profile: {
        bio: "Full Stack Developer"
      }
    }
  }
};


const bio = response?.data?.user?.profile?.bio;
// console.log(bio);

const zipCode = response?.data?.address?.zipCode;
// console.log(zipCode); 

/*===============================
 Nullish Coalescing Operator (??)
=================================*/

const userConfig = {
  score: 0,
  title: "",
  isMuted: false,
  timeout: null
};

// console.log(userConfig.score || 100);  
// console.log(userConfig.title || "N/A");

// console.log(userConfig.score ?? 100); 
// console.log(userConfig.title ?? "N/A"); 
// console.log(userConfig.timeout ?? 30); 