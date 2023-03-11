// Black magic
const prompt = require('prompt-sync')();

// INPUT
let weight = prompt("Please enter your weight: ");
let height = prompt("Please enter your height: ");

// PROCESSING
weight = parseFloat(weight);
height = parseFloat(height);
let bmi = weight / height ** 2;

// OUTPUT
console.log("Your BMI is ", bmi);

// FURTHER PROCESSING
if (bmi < 18.5) {
    console.log("Underweight")
} else if (bmi < 24.5) {
    console.log("Healthy")
} else if (bmi < 30) {
    console.log("Overweight")
} else {
    console.log("Obese")
}

// const = constant variable --> once assigned value cannot be resassigned 
// let variable can be reassigned