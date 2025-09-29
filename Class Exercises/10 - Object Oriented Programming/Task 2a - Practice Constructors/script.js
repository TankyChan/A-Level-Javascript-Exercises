// TODO: Create a Car class with a constructor that takes make and model, with default values
// Add a getInfo() method that returns a string like: "Make Model"

// Uncomment and complete below:
 class Car {
   constructor(make = "Unknown", model = "Unknown") {
      this.make = make 
      this.model = model
   }
   getInfo() {
    return `${this.make} is a ${this.model}.`;
   }
 }

document.getElementById("btnDefault").onclick = function() {
  const car = new Car();
  document.getElementById("output").innerText = car.getInfo();
};

document.getElementById("btnCustom").onclick = function() {
  const car = new Car("Toyota", "Corolla");
  document.getElementById("output").innerText = car.getInfo();
};
