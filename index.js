let number = 10;
const PI = 3.14;

const fruits = ['apple', 'banana', 'orange'];

const person = {
  name: 'John',
  age: 30,
  isStudent: false
};


console.log(`My name is ${person.name} and I am ${person.age} years old.`);

const add = (a, b) => a + b;
console.log(`The sum of 5 and 3 is ${add(5, 3)}.`);


for (let fruit of fruits) {
  console.log(fruit);
}

if (number > 0) {
  console.log(`${number} is a positive number.`);
} else if (number === 0) {
  console.log(`${number} is zero.`);
} else {
  console.log(`${number} is a negative number.`);
}

switch (person.isStudent) {
  case true:
    console.log(`${person.name} is a student.`);
    break;
  case false:
    console.log(`${person.name} is not a student.`);
    break;
}

function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('Alice'));
