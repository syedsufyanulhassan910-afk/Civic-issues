// 🛠️ Understanding the Constructor

// class SmartPhone {
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   displayDetails() {
//     return `${this.brand} ${this.model} costs $${this.price}.`;
//   }
// }


// const phone1 = new SmartPhone("Apple", "iPhone 15", 999);
// const phone2 = new SmartPhone("Samsung", "Galaxy S24", 899);

// console.log(phone1.displayDetails());
// console.log(phone2.displayDetails());



// 1. Encapsulation (Data Hiding & Binding)

// class BankAccount {
//   #balance;
//   constructor(owner, initialBalance) {
//     this.owner = owner;
//     this.#balance = initialBalance;
//   }

  
//   getBalance() {
//     return `Account owner: ${this.owner}. Balance: $${this.#balance}`;
//   }


//   deposit(amount) {
//     if (amount > 0) {
//       this.#balance += amount;
//     }
//   }
// }

// const myAccount = new BankAccount("Abdul", 1000);
// myAccount.deposit(500);

// console.log(myAccount.getBalance()); 


// 2. Inheritance (Code Reusability)

// // Parent Class
// class SmartPhone {
//   constructor(brand, model) {
//     this.brand = brand;
//     this.model = model;
//   }

//   powerOn() {
//     return `${this.brand} ${this.model} is booting up...`;
//   }
// }

// // Child Class inherits from SmartPhone
// class GamingPhone extends SmartPhone {
//   constructor(brand, model, gpu) {
//     super(brand, model); 
//     this.gpu = gpu;
//   }

//   playGame() {
//     return `Starting Game with ${this.gpu} graphics!`;
//   }
// }

// const gamerPhone = new GamingPhone("Asus", "ROG Phone 8", "Adreno 750");
// console.log(gamerPhone.powerOn()); 
// console.log(gamerPhone.playGame());


// 3. Polymorphism (Many Forms)

// class Animal {
//   makeSound() {
//     return "Some generic animal sound...";
//   }
// }

// class Dog extends Animal {
//   // Overriding the parent's method
//   makeSound() {
//     return "Woof! Woof!";
//   }
// }

// class Cat extends Animal {
//   // Overriding the parent's method
//   makeSound() {
//     return "Meow!";
//   }
// }

// const myDog = new Dog();
// const myCat = new Cat();

// console.log(myDog.makeSound());
// console.log(myCat.makeSound());


// 4. Abstraction (Hiding Complexity)

// class CoffeeMachine {
//   #heatWater() {
//     return "Boiling water to 90°C...";
//   }

//   #brewCoffee() {
//     return "Filtering water through ground coffee beans...";
//   }

  
//   makeEspresso() {
    
//     console.log(this.#heatWater());
//     console.log(this.#brewCoffee());
//     return "☕ Your hot Espresso is ready!";
//   }
// }

// const myMachine = new CoffeeMachine();


// console.log(myMachine.makeEspresso());