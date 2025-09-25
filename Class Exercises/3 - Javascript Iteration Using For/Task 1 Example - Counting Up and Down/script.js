// Function to start the counting demonstrations
function startCounting() {
    // Clear previous outputs
    document.getElementById('countUpOutput').innerHTML = '';
    document.getElementById('countDownOutput').innerHTML = '';

    // Counting up from 1 to 10
    let countUpResults = [];
    for (let i = 1; i <= 10; i++) {
        countUpResults.push(i);
    }
    document.getElementById('countUpOutput').innerHTML = countUpResults.join(' → ');

    // Counting down from 10 to 1
    let countDownResults = [];
    for (let i = 10; i >= 1; i--) {
        countDownResults.push(i);
    }
    document.getElementById('countDownOutput').innerHTML = countDownResults.join(' → ');
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Clear outputs
    document.getElementById('countUpOutput').innerHTML = 'Click the button to start counting';
    document.getElementById('countDownOutput').innerHTML = 'Click the button to start counting';
});
