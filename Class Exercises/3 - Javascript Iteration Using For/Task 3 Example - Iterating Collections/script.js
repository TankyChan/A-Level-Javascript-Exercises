document.getElementById("btnStringFor").onclick = function() {
  const str = "JAVASCRIPT ROCKS!";
  let out = "";
  for (let i = 0; i < str.length; i++) {
    out += `Letter ${i + 1}: ${str[i]}\n`;
  }
  document.getElementById("output").innerText = out;
};

document.getElementById("btnStringForOf").onclick = function() {
  const str = "JAVASCRIPT ROCKS!";
  let out = "";
  let idx = 1;
  for (const ch of str) {
    out += `Letter ${idx}: ${ch}\n`;
    idx++;
  }
  document.getElementById("output").innerText = out;
};

document.getElementById("btnArrayFor").onclick = function() {
  const arr = ["🍕", "🍔", "🍟", "🌭", "🍿", "🥤"];
  let out = "Food Array (for loop):\n";
  for (let i = 0; i < arr.length; i++) {
    out += `Index ${i}: ${arr[i]}\n`;
  }
  document.getElementById("output").innerText = out;
};

document.getElementById("btnArrayForEach").onclick = function() {
  const arr = ["🍕", "🍔", "🍟", "🌭", "🍿", "🥤"];
  let out = "Food Array (forEach):\n";
  arr.forEach((item, i) => {
    out += `Index ${i}: ${item}\n`;
  });
  document.getElementById("output").innerText = out;
};

document.getElementById("btnFun").onclick = function() {
  const str = "JAVASCRIPT ROCKS!";
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  document.getElementById("output").innerText = `Reversed: ${reversed}`;
};
