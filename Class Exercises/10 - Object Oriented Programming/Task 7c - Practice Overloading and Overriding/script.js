// TODO: Create a Joiner class with a join(a, b) method
// Create AdvancedJoiner that overrides join(a, b) and uses optional parameters for overloading

// Uncomment and complete below:
// class Joiner {
//   join(a, b) {
//     // your code here
//   }
// }
// class AdvancedJoiner extends Joiner {
//   join(a, b) {
//     // If only one argument, return a + a
//     // Otherwise, return a + b
//   }
// }

const base = new Joiner();
const adv = new AdvancedJoiner();
document.getElementById("btnBase").onclick = function() {
  // document.getElementById("output").innerText = base.join("Hi", "There");
  document.getElementById("output").innerText = "(Your Joiner class output will appear here)";
};
document.getElementById("btnAdv1").onclick = function() {
  // document.getElementById("output").innerText = adv.join("Hi", "There");
  document.getElementById("output").innerText = "(Your AdvancedJoiner class output will appear here)";
};
document.getElementById("btnAdv2").onclick = function() {
  // document.getElementById("output").innerText = adv.join("Hello");
  document.getElementById("output").innerText = "(Your AdvancedJoiner class output will appear here)";
};
