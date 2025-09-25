const numbers = [12, 45, 7, 22, 99, 3, 18];
document.getElementById("btnFindMax").onclick = function() {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  document.getElementById("output").innerText = `The biggest number is: ${max}`;
};
