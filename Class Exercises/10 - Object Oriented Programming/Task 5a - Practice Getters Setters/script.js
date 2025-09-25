// TODO: Create a Person class with a getter and setter for name

// Uncomment and complete below:
// class Person {
//   constructor(name) {
//     // your code here
//   }
//   get name() {
//     // your code here
//   }
//   set name(newName) {
//     // your code here
//   }
// }

const person = new Person("Alice");
document.getElementById("btnSet").onclick = function() {
  // person.name = "Bob";
  document.getElementById("output").innerText = "(Name set to Bob)";
};
document.getElementById("btnGet").onclick = function() {
  // document.getElementById("output").innerText = person.name;
  document.getElementById("output").innerText = "(Your Person class output will appear here)";
};
