const numbers = [3, 7, 2, 9, 4, 6];
const foods = ["🍕", "🍔", "🍟", "🌭", "🍿", "🥤"];

document.getElementById("btnSum").onclick = function() {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  document.getElementById("output").innerText = `Sum of numbers: ${sum}`;
};

document.getElementById("btnList").onclick = function() {
  let out = "Food List:\n";
  foods.forEach((item, i) => {
    out += `Item ${i + 1}: ${item}\n`;
  });
  document.getElementById("output").innerText = out;
};

document.getElementById("btnEmoji").onclick = function() {
  let found = false;
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === "🍕") {
      document.getElementById("output").innerText = `Pizza found at position ${i + 1}!`;
      found = true;
      break;
    }
  }
  if (!found) document.getElementById("output").innerText = "No pizza in the array!";
};
