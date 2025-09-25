document.getElementById("btnCount").onclick = function() {
  const str = document.getElementById("inputString").value;
  let counts = {};
  for (let ch of str) {
    counts[ch] = (counts[ch] || 0) + 1;
  }
  let out = "Character counts:\n";
  for (let ch in counts) {
    out += `'${ch}': ${counts[ch]}\n`;
  }
  document.getElementById("output").innerText = out;
};
