// A simple Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getInfo() {
    return `${this.name} is ${this.age} years old.`;
  }
}

document.getElementById("btnShow").onclick = function() {
  const person = new Person("Alex", 17);
  document.getElementById("output").innerText = person.getInfo();
};
