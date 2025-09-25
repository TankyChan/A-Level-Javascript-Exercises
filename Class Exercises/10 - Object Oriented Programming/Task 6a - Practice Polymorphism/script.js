// TODO: Create an Animal class with a speak() method
// Create Dog and Cat classes that extend Animal and override speak()

// Uncomment and complete below:
// class Animal {
//   speak() {
//     // your code here
//   }
// }
// class Dog extends Animal {
//   speak() {
//     // your code here
//   }
// }
// class Cat extends Animal {
//   speak() {
//     // your code here
//   }
// }

const dog = new Dog();
const cat = new Cat();
document.getElementById("btnDog").onclick = function() {
  // document.getElementById("output").innerText = dog.speak();
  document.getElementById("output").innerText = "(Your Dog class output will appear here)";
};
document.getElementById("btnCat").onclick = function() {
  // document.getElementById("output").innerText = cat.speak();
  document.getElementById("output").innerText = "(Your Cat class output will appear here)";
};
