// Student class with getter and setter
class Student {
  constructor(name, grade) {
    this.name = name;
    this._grade = grade;
  }
  get grade() {
    return this._grade;
  }
  set grade(value) {
    if (value >= 0 && value <= 100) {
      this._grade = value;
    }
  }
  getInfo() {
    return `${this.name}'s grade is ${this.grade}`;
  }
}

const student = new Student("Jamie", 85);

document.getElementById("btnShow").onclick = function() {
  document.getElementById("output").innerText = student.getInfo();
};

document.getElementById("btnSet").onclick = function() {
  const newGrade = prompt("Enter a new grade for Jamie (0-100):");
  student.grade = Number(newGrade);
  document.getElementById("output").innerText = student.getInfo();
};
