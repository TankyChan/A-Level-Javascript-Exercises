// TODO: Create a Rectangle class with width and height properties
// Add a getter for area

// Uncomment and complete below:
// class Rectangle {
//   constructor(width, height) {
//     // your code here
//   }
//   get area() {
//     // your code here
//   }
// }

const rect = new Rectangle(2, 3);
document.getElementById("btnSet").onclick = function() {
  // rect.width = 5;
  // rect.height = 4;
  document.getElementById("output").innerText = "(Size set to 5x4)";
};
document.getElementById("btnGet").onclick = function() {
  // document.getElementById("output").innerText = `Area: ${rect.area}`;
  document.getElementById("output").innerText = "(Your Rectangle class output will appear here)";
};
