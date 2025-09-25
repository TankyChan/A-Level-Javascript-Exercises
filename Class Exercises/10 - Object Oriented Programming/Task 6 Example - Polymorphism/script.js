// Base Animal class
class Animal {
  speak() {
    return "Some generic animal sound.";
  }
}

class Dog extends Animal {
  speak() {
    return "Woof!";
  }
}

class Cat extends Animal {
  speak() {
    return "Meow!";
  }
}

const animals = [new Dog(), new Cat(), new Animal()];

document.getElementById("btnShow").onclick = function() {
  let out = "Animal sounds:\n";
  animals.forEach(animal => {
    out += animal.speak() + "\n";
  });
  document.getElementById("output").innerText = out;
};
