// TODO: Create a Student class with a constructor that takes name and year, with default values
// Add a getInfo() method that returns a string like: "Name (Year)"

// Uncomment and complete below:
// class Student {
//   constructor(name = "Unknown", year = 1) {
//     // your code here
//   }
//   getInfo() {
//     // your code here
//   }
// }

document.getElementById("btnDefault").onclick = function() {
  // const student = new Student();
  // document.getElementById("output").innerText = student.getInfo();
  document.getElementById("output").innerText = "(Your Student class output will appear here)";
};

document.getElementById("btnCustom").onclick = function() {
  // const student = new Student("Ava", 3);
  // document.getElementById("output").innerText = student.getInfo();
  document.getElementById("output").innerText = "(Your Student class output will appear here)";
};
