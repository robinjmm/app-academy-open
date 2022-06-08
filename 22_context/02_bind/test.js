// Your code here

const Employee = require('./employee');

const wick = new Employee("John Wick", "Dog Lover");

setTimeout(wick.sayName.bind(wick), 2000);

setTimeout(wick.sayOccupation.bind(wick), 3000);