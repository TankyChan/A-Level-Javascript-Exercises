// TODO: Create a Car class with a constructor that takes make and model, with default values
// Add a getInfo() method that returns a string like: "Make Model"

// Uncomment and complete below:
// class Car {
//   constructor(make = "Unknown", model = "Unknown") {
//     // your code here
//   }
//   getInfo() {
//     // your code here
//   }
// }

document.getElementById("btnDefault").onclick = function() {
  // const car = new Car();
  // document.getElementById("output").innerText = car.getInfo();
  document.getElementById("output").innerText = "(Your Car class output will appear here)";
};

document.getElementById("btnCustom").onclick = function() {
  // const car = new Car("Toyota", "Corolla");
  // document.getElementById("output").innerText = car.getInfo();
  document.getElementById("output").innerText = "(Your Car class output will appear here)";
};
