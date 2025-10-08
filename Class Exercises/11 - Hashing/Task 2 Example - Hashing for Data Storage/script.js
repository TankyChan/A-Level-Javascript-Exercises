// Simple hash function for 6-digit code
function simpleHash(code) {
  // Add all digits and mod 100
  let sum = 0;
  for (let i = 0; i < code.length; i++) {
    sum += parseInt(code[i], 10);
  }
  return sum % 100;
}

const storage = new Array(100).fill(null);

// Store code
function storeCode(code) {
  const pos = simpleHash(code);
  storage[pos] = code;
  return pos;
}

// Search code
function searchCode(code) {
  const pos = simpleHash(code);
  return storage[pos] === code ? pos : -1;
}

document.getElementById("btnStore").onclick = function() {
  const code = document.getElementById("code").value;
  if (code.length !== 6 || !/^[0-9]+$/.test(code)) {
    document.getElementById("output").innerText = "Please enter a 6-digit code.";
    return;
  }
  const pos = storeCode(code);
  document.getElementById("output").innerText = `Stored at position ${pos}`;
};

document.getElementById("btnSearch").onclick = function() {
  const code = document.getElementById("code").value;
  if (code.length !== 6 || !/^[0-9]+$/.test(code)) {
    document.getElementById("output").innerText = "Please enter a 6-digit code.";
    return;
  }
  const pos = searchCode(code);
  if (pos === -1) {
    document.getElementById("output").innerText = "Code not found.";
  } else {
    document.getElementById("output").innerText = `Code found at position ${pos}`;
  }
};

document.getElementById("btnList").onclick = function() {
  let out = "Storage contents (position: code):\n";
  for (let i = 0; i < storage.length; i++) {
    if (storage[i] !== null) {
      out += `${i}: ${storage[i]}\n`;
    }
  }
  if (out === "Storage contents (position: code):\n") out += "(empty)";
  document.getElementById("output").innerText = out;
};
