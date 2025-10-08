// Hash function: sum digits, mod 10
function simpleHash(code) {
  let sum = 0;
  for (let i = 0; i < code.length; i++) {
    sum += parseInt(code[i], 10);
  }
  return sum % 10;
}

// Hash table with chain linking
// Create an empty array for our hash table
const storage = [];
// For each position in the table (0 to 9),
// set up an empty array (the "chain") to hold codes that collide
for (let i = 0; i < 10; i++) {
  storage[i] = []; // Each position is a chain (array)
}

function storeCode(code) {
  // TODO: Complete the code to store a code in the hash table
  // const pos = ___;
  // if (!storage[pos].includes(code)) {
  //   storage[pos].push(code);
  // }
  // return pos;
}

function searchCode(code) {
  // TODO: Complete the code to search for a code in the hash table
  // const pos = ___;
  // return storage[pos].includes(code) ? pos : -1;
}

document.getElementById("btnStore").onclick = function() {
  const code = document.getElementById("code").value;
  if (code.length !== 6 || !/^[0-9]+$/.test(code)) {
    document.getElementById("output").innerText = "Please enter a 6-digit code.";
    return;
  }
  const pos = storeCode(code);
  document.getElementById("output").innerText = `Stored at position ${pos} (chain length: ${storage[pos].length})`;
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
    document.getElementById("output").innerText = `Code found at position ${pos} (chain: ${storage[pos].join(", ")})`;
  }
};

document.getElementById("btnList").onclick = function() {
  let out = "Hash Table Contents (position: codes):\n";
  for (let i = 0; i < storage.length; i++) {
    out += `${i}: [${storage[i].join(", ")}]\n`;
  }
  document.getElementById("output").innerText = out;
};
