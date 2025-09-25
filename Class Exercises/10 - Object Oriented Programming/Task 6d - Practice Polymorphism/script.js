// TODO: Create a Message class with a send() method
// Create Email and SMS classes that extend Message and override send()

// Uncomment and complete below:
// class Message {
//   send() {
//     // your code here
//   }
// }
// class Email extends Message {
//   send() {
//     // your code here
//   }
// }
// class SMS extends Message {
//   send() {
//     // your code here
//   }
// }

const email = new Email();
const sms = new SMS();
document.getElementById("btnEmail").onclick = function() {
  // document.getElementById("output").innerText = email.send();
  document.getElementById("output").innerText = "(Your Email class output will appear here)";
};
document.getElementById("btnSMS").onclick = function() {
  // document.getElementById("output").innerText = sms.send();
  document.getElementById("output").innerText = "(Your SMS class output will appear here)";
};
