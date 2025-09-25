// TODO: Create a BankAccount class with a private #balance field
// Add deposit(amount) and getBalance() methods

// Uncomment and complete below:
// class BankAccount {
//   #balance;
//   constructor() {
//     // your code here
//   }
//   deposit(amount) {
//     // your code here
//   }
//   getBalance() {
//     // your code here
//   }
// }

const account = new BankAccount();
document.getElementById("btnDeposit").onclick = function() {
  // account.deposit(50);
  document.getElementById("output").innerText = "(Deposit method called. Check balance!)";
};
document.getElementById("btnShow").onclick = function() {
  // document.getElementById("output").innerText = `Balance: $${account.getBalance()}`;
  document.getElementById("output").innerText = "(Your BankAccount class output will appear here)";
};
