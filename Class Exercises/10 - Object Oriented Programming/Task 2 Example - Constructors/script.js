// Animal class with two ways to construct
class Animal {
  constructor(name = "Unknown", type = "Unknown") {
    this.name = name;
    this.type = type;
  }
  getInfo() {
    return `${this.name} is a ${this.type}.`;
  }
}

document.getElementById("btnDefault").onclick = function() {
  const animal = new Animal();
  document.getElementById("output").innerText = animal.getInfo();
};

document.getElementById("btnWithParams").onclick = function() {
  const animal = new Animal("Simba", "Lion");
  document.getElementById("output").innerText = animal.getInfo();
};
