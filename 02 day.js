// Day 02-Functions
// Date: 03 May 2026

// Basin functions
function greet(name){
  return `Hello,${name}!`;
}
console.log(greet("Bilal"));

// functions with one or more parameterss
function add(a, b){
  return a + b;
}
console.log(add(10, 20));

// Arrow function (where we mostly do not need the retrun )
const multiply = (a, b) => a * b;
console.log(multiply(5, 6));

// Function with default parameter
function introduce(name, role = "Frontend Developer"){
  return `I am ${name}, a ${role}.`;
}
console.log(introduce("Bilal khan"));

// real world example (finding the discount)
function calculateDiscount(price, discountPercent){
  const discount = (price * discountPercent) / 100;
  const finalPrice = price - discount;
  return  `Original: ${price}, Discount: ${discount}, Final: ${finalPrice}`;
}
console.log(calculateDiscount(5000, 20));