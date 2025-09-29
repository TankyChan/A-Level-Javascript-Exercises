// TODO: Create a Student class with a constructor that takes name and year, with default values
// Add a getInfo() method that returns a string like: "Name (Year)"

// Uncomment and complete below:
 class Student {
   constructor(name = "Unknown", year = 1) {
     this.name = name
     this.year = year
   }
   getInfo() {
    return `${this.name} is a ${this.year}.`;
   }
 }

document.getElementById("btnDefault").onclick = function() {
   const student = new Student();
   document.getElementById("output").innerText = student.getInfo();
};

document.getElementById("btnCustom").onclick = function() {
  const student = new Student("Ava", 3);
  document.getElementById("output").innerText = student.getInfo();

};
