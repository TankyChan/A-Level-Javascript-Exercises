// Base Animal class
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} makes a sound.`;
  }
}

// Dog class inherits from Animal
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  speak() {
    return `${this.name} barks!`;
  }
  getInfo() {
    return `${this.name} is a ${this.breed}.`;
  }
}

document.getElementById("btnShow").onclick = function() {
  const animal = new Animal("Milo");
  const dog = new Dog("Rex", "Labrador");
  let out = animal.speak() + "\n";
  out += dog.speak() + "\n";
  out += dog.getInfo();
  document.getElementById("output").innerText = out;
};
