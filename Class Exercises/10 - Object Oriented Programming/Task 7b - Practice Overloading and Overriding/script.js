// TODO: Create a Greeter class with a greet(name) method
// Create AdvancedGreeter that overrides greet(name) and uses optional parameters for overloading

// Uncomment and complete below:
// class Greeter {
//   greet(name) {
//     // your code here
//   }
// }
// class AdvancedGreeter extends Greeter {
//   greet(name) {
//     // If no name, return "Hello, friend!"
//     // Otherwise, return "Hello, name!"
//   }
// }

const base = new Greeter();
const adv = new AdvancedGreeter();
document.getElementById("btnBase").onclick = function() {
  // document.getElementById("output").innerText = base.greet("Sam");
  document.getElementById("output").innerText = "(Your Greeter class output will appear here)";
};
document.getElementById("btnAdv1").onclick = function() {
  // document.getElementById("output").innerText = adv.greet();
  document.getElementById("output").innerText = "(Your AdvancedGreeter class output will appear here)";
};
document.getElementById("btnAdv2").onclick = function() {
  // document.getElementById("output").innerText = adv.greet("Alex");
  document.getElementById("output").innerText = "(Your AdvancedGreeter class output will appear here)";
};
