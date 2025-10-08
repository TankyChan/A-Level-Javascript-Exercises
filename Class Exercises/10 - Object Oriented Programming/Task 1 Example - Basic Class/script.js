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
  const person1 = new Person("Alex", 17);
  const person2 = new Person("Bob", 82);
  document.getElementById("output").innerText = person2.getInfo();
};
