//array are reference values
let fruits = ["apples", "bananas", "cherries"];
let f2 = fruits; // f2 links to an array reference, so any changes to the array will be captured
fruits.push("durians"); // push = append in python
console.log("fruits: ", fruits);

console.log("f2: ", f2) 

let x = 3;
let y = x; // primitive value is assigned, any changes to x will not affect y
x = x + 5;
console.log("x: ", x) 
console.log("y: ", y)
