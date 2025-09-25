// TODO: Create a Temperature class with a celsius property
// Add a getter and setter for fahrenheit

// Uncomment and complete below:
// class Temperature {
//   constructor(celsius) {
//     // your code here
//   }
//   get fahrenheit() {
//     // your code here
//   }
//   set fahrenheit(f) {
//     // your code here
//   }
// }

const temp = new Temperature(0);
document.getElementById("btnSet").onclick = function() {
  // temp.fahrenheit = 212;
  document.getElementById("output").innerText = "(Fahrenheit set to 212)";
};
document.getElementById("btnGet").onclick = function() {
  // document.getElementById("output").innerText = `Celsius: ${temp.celsius}`;
  document.getElementById("output").innerText = "(Your Temperature class output will appear here)";
};
