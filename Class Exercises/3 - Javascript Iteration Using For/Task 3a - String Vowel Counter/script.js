document.getElementById("btnCount").onclick = function() {
  const str = document.getElementById("inputString").value;
  let count = 0;
  let vowels = "aeiouAEIOU";
  let found = [];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
      found.push(str[i]);
    }
  }
  let msg = `Vowels found: ${count}\n`;
  if (count > 0) msg += `They are: ${found.join(", ")}`;
  else msg += "Try adding some vowels!";
  document.getElementById("output").innerText = msg;
};
