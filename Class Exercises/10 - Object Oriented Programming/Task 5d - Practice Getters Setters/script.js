// TODO: Create a Circle class with a radius property
// Add a getter and setter for diameter

// Uncomment and complete below:
// class Circle {
//   constructor(radius) {
//     // your code here
//   }
//   get diameter() {
//     // your code here
//   }
//   set diameter(d) {
//     // your code here
//   }
// }

const circle = new Circle(1);
document.getElementById("btnSet").onclick = function() {
  // circle.diameter = 10;
  document.getElementById("output").innerText = "(Diameter set to 10)";
};
document.getElementById("btnGet").onclick = function() {
  // document.getElementById("output").innerText = `Radius: ${circle.radius}`;
  document.getElementById("output").innerText = "(Your Circle class output will appear here)";
};
