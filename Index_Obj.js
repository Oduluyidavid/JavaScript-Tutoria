//  Indexing object are typically refer to accessing or modifying properties with in an object.

// There are two ways to access or modifying an index in javascript
// 1. Dot notation
// 2. Bracket notation

//  example

const person = {
  name: "Soji",
  age: 30,
};
console.log(person.name);

console.log(person["age"]);

// class in JavaScript
// class is a blueprint for creating objects and shared properties and method

// Basic syntax
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello My name is ${this.name} and I'm ${this.age} year old`);
  }
}
 const Person = ("Joke", 28);
 Person.greet();


