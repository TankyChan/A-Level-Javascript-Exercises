// TODO: Create a Multiplier class with a multiply(a, b) method
// Create AdvancedMultiplier that overrides multiply(a, b) and uses optional parameters for overloading

// Uncomment and complete below:
// class Multiplier {
//   multiply(a, b) {
//     // your code here
//   }
// }
// class AdvancedMultiplier extends Multiplier {
//   multiply(a, b) {
//     // If only one argument, return a squared
//     // Otherwise, return a * b
//   }
// }

const base = new Multiplier();
const adv = new AdvancedMultiplier();
document.getElementById("btnBase").onclick = function() {
  // document.getElementById("output").innerText = `Base: 3 * 4 = ${base.multiply(3, 4)}`;
  document.getElementById("output").innerText = "(Your Multiplier class output will appear here)";
};
document.getElementById("btnAdv2").onclick = function() {
  // document.getElementById("output").innerText = `Advanced: 3 * 4 = ${adv.multiply(3, 4)}`;
  document.getElementById("output").innerText = "(Your AdvancedMultiplier class output will appear here)";
};
document.getElementById("btnAdv1").onclick = function() {
  // document.getElementById("output").innerText = `Advanced: 5 squared = ${adv.multiply(5)}`;
  document.getElementById("output").innerText = "(Your AdvancedMultiplier class output will appear here)";
};
