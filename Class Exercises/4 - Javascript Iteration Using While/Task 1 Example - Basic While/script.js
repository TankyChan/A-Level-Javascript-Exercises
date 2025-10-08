const button = document.getElementById('showNumbersBtn');
const output = document.getElementById('output');

// Add an event listener to the button
button.addEventListener('click', () => {
    displayNumbers();
});


function displayNumbers() {
  let count = 1;
  let result = '';

  while (count <= 10) {
    result += count + '<br>';
    count++;
  }

  output.innerHTML = result;
}

