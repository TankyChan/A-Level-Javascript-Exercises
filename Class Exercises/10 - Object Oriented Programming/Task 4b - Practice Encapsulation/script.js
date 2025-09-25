// TODO: Create a Counter class with a private #value field
// Add increment() and getValue() methods

// Uncomment and complete below:
// class Counter {
//   #value;
//   constructor() {
//     // your code here
//   }
//   increment() {
//     // your code here
//   }
//   getValue() {
//     // your code here
//   }
// }

const counter = new Counter();
document.getElementById("btnInc").onclick = function() {
  // counter.increment();
  document.getElementById("output").innerText = "(Increment method called. Check value!)";
};
document.getElementById("btnShow").onclick = function() {
  // document.getElementById("output").innerText = `Value: ${counter.getValue()}`;
  document.getElementById("output").innerText = "(Your Counter class output will appear here)";
};
