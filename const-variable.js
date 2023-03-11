const prompt = require('prompt-sync')();
// a 'const' us short for "constant"
// a const variable is basically a variable once asisgned a value
// cannot be REASSIGNED to 
const pi = 3.14;
// pi - 3.1417; // error! Cannot reassign to const

let x = 6;
x =7; // okay, because the variable is created using let

// we dont have any intent of reassigning a vlaue to 'ageOfAlice'
// so use const
const ageOfAlice = 18;
// ageOfAlice = 27; // illegal, because all girls are always 18

// Don't describe const as a "variable that cannot be changed"
// it's misleading -- it's better to say "const cannot be reassigned to"
const fruits = ["apples", "bananas", "oranges"];
// fruits = ["1","2","3"] <-- const only prevents reassignment to the variable
fruits[1] = "durians"; // <-- const does not prevent any other kind of manipulation
console.log("fruits = ", fruits);

fruits.push("mangosteen"); // equal to appending to a list in python
console.log("fruits=", fruits);

let x = 3.1417;
x = x.toFixed(2); // rounds to 2 decimals place, but will return a string representation of the number
console.log(x);