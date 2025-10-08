// TODO: Complete the hashing function by filling in all the missing parts
function simpleHash(str) {
  // let hash = ___;
  // for (let i = ___; i < ___; i++) {
  //   hash = (hash * ___ + ___) % ___;
  // }
  // return hash;
}

document.getElementById("btnHash").onclick = function() {
  const pw = document.getElementById("password").value;
  const hashed = simpleHash(pw);
  document.getElementById("output").innerText = `Hash: ${hashed}`;
};
