// Day 03 Arrays and array method
// Date: 04 May 2026
   
            // Let,s start practice Arrayss //
// Basic array
let fruits = ["apple", "banana", "mango", "orange"];

//Accessing elements
console.log(fruits[0]); // apple
console.log(fruits[2]); // mango

//  Array lenght 
console.log(fruits.length); // 4

// pushing - add to an end 
fruits.push("grapes");
console.log(fruits);

//pop - remove from end
fruits.pop();
console.log(fruits);

// unshift - add to the beginning 
fruits.unshift("strawberry");
console.log(fruits);

// shift - remove from beginning
fruits.shift();
console.log(fruits);

// indexOf - find position
console.log(fruits.indexOf("mango")); // 2

// includes - check if exists
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("grapes")); // false

// map - transform each element
let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits);

// filter - filter elements
let skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
let frontendSkills = skills.filter(skill => skill !== "Node.js");
console.log(frontendSkills);

// foreach - looop through an array 
skills.forEach((skill, index) => {
  console.log(`${index + 1}. ${skill}`);
});

// Real world example 
let developers = [
  { name: "Bilal khan shab", skill: "JavaScript", experience: 1 },
  { name: "Ali", skill: "Python", experience: 3 },
  { name: "Sara", skill: "React", experience: 2 }
];

// Find junior developers
let juniors = developers.filter(dev => dev.experience<2);
console.log(juniors);

//Getting only the names 
let names = developers.map(dev => dev.name);
console.log(names);