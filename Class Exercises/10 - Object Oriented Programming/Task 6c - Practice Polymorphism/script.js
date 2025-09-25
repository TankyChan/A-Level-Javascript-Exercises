// TODO: Create a Vehicle class with a move() method
// Create Car and Bike classes that extend Vehicle and override move()

// Uncomment and complete below:
// class Vehicle {
//   move() {
//     // your code here
//   }
// }
// class Car extends Vehicle {
//   move() {
//     // your code here
//   }
// }
// class Bike extends Vehicle {
//   move() {
//     // your code here
//   }
// }

const car = new Car();
const bike = new Bike();
document.getElementById("btnCar").onclick = function() {
  // document.getElementById("output").innerText = car.move();
  document.getElementById("output").innerText = "(Your Car class output will appear here)";
};
document.getElementById("btnBike").onclick = function() {
  // document.getElementById("output").innerText = bike.move();
  document.getElementById("output").innerText = "(Your Bike class output will appear here)";
};
