// Day 01 - Variables and Date Types
// Date: 02 May 2026

let myName = "Bilal";
let age = 22;
let isLearning = true;
let skills = ["HTML", "CSS", "JavaScript"];

console.log("My name is: " + myName);
console.log("My age is: " + age);
console.log("Am I learning? " + isLearning);
console.log ("My skills: " + skills);

function introduce(name, age) {
  return `Hi, I am ${name} and I am ${age} years old.`;
}


console.log(introduce(myName, age));