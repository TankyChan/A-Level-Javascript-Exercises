// TODO: Complete the missing parts of the hashing function
function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    // hash = (hash * ___ + str.charCodeAt(i)) % 1000000007;
    // Fill in the blank above
  }
  return hash;
}

document.getElementById("btnHash").onclick = function() {
  const pw = document.getElementById("password").value;
  const hashed = simpleHash(pw);
  document.getElementById("output").innerText = `Hash: ${hashed}`;
};
