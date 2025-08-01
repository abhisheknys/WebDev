// Hello This is Day 1 of Learning JAvascript from Scratch in 30 days.

// Let  Const & Var

// var name = "Abhishek";
// var name = "Pal"; // works fine
// var name = "Rishi";

// console.log(name); // its is function Scoped and creates log of bugs.

const birthOfPlace = "Gwalior Madhya Pradesh India";

console.log(birthOfPlace); // This is the permannent place where you're Born

let weightOfClient = 60;
weightOfClient = 50 + 1;

console.log(weightOfClient);

// 📦 2. Data Types in JavaScript

// 🧾 1. Primitive Data Types

// let name = "Abhhishek";
// let number = 011;
// let iswarrior = true;
// let abhi1 ;
// let abhi = null;
// let bigintabhi = 23456789n;

// console.log(name ,number, iswarrior, abhi1, abhi, bigintabhi);

// 🌳 2. Non-Primitive (Reference) Data Types

// Object

// let shoppingKart = {
//     productName1 : "HairOil",
//     productName2 : "FaceWash",
//     productName3 : "MouthWash"
// };

// // Array

// let AmazonKart = ['Mobile','Laptops', 'Tablets'];

// // Function

// function greet() {
// console.log("Hello Abhishek !")
// };

// greet ();

// Examples for better Ubnderdstandings

// Shopping kart a Object with the details of a product name in book "No Excuses".

// let shoppingKart = {
// productName :"Book - No Excuses",
// productId : 01,
// Quantity : 02,
// isInStock : true,
// price :299
// };

// console.log(shoppingKart);

// 👉 Create 10 variables using let and const in an Object .

let adminDetails = {
  ageOfAdmin: 21,
  password: "1234234567",
  location: {
    city: "Noida",
    country: "India",
  },

  // Function 1: Is Adult
  isAdult: function () {
    return this.ageOfAdmin >= 18;
  },

  // Function 2: Get Full Location
  getFullLocation: function () {
    return `${this.location.city}, ${this.location.country}`;
  },

  // Function 3: Mask Password
  maskPassword: function () {
    let length = this.password.length;
    return "*".repeat(length - 2) + this.password.slice(-2);
  }
};

console.log(adminDetails.isAdult()); // ✅ true
console.log(adminDetails.getFullLocation()); // ✅ "Noida, India"
console.log(adminDetails.maskPassword()); // ✅ "********67"
