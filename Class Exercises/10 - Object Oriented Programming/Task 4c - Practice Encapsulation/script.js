// TODO: Create a SecretMessage class with a private #message field
// Add setMessage(msg) and reveal() methods

// Uncomment and complete below:
// class SecretMessage {
//   #message;
//   constructor() {
//     // your code here
//   }
//   setMessage(msg) {
//     // your code here
//   }
//   reveal() {
//     // your code here
//   }
// }

const secret = new SecretMessage();
document.getElementById("btnSet").onclick = function() {
  // secret.setMessage("The cake is a lie!");
  document.getElementById("output").innerText = "(Message set. Try reveal!)";
};
document.getElementById("btnReveal").onclick = function() {
  // document.getElementById("output").innerText = secret.reveal();
  document.getElementById("output").innerText = "(Your SecretMessage class output will appear here)";
};
