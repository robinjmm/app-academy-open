// Write a function printObject(obj) that prints out all key-value pairs of an object.
// The format should be key - value.

function printObject(obj) {
    for (let key in obj) {
        console.log(`${key} - ${obj[key]}`);
    }
}

let bootcamp = {
    name: "App Academy",
    color: "Red",
    population: 120
};

printObject(bootcamp); // prints
  // name - App Academy
  // color - Red
  // population - 120