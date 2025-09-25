// TODO: Create a Shape class with an area() method
// Create Rectangle and Circle classes that extend Shape and override area()

// Uncomment and complete below:
// class Shape {
//   area() {
//     // your code here
//   }
// }
// class Rectangle extends Shape {
//   constructor(width, height) {
//     // your code here
//   }
//   area() {
//     // your code here
//   }
// }
// class Circle extends Shape {
//   constructor(radius) {
//     // your code here
//   }
//   area() {
//     // your code here
//   }
// }

const rect = new Rectangle(4, 5);
const circle = new Circle(3);
document.getElementById("btnRect").onclick = function() {
  // document.getElementById("output").innerText = `Rectangle area: ${rect.area()}`;
  document.getElementById("output").innerText = "(Your Rectangle class output will appear here)";
};
document.getElementById("btnCircle").onclick = function() {
  // document.getElementById("output").innerText = `Circle area: ${circle.area().toFixed(2)}`;
  document.getElementById("output").innerText = "(Your Circle class output will appear here)";
};
