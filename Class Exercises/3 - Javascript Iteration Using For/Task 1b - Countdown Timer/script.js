// TODO: Write the countdown function
function startCountdown() {
    // Get input values
    const startNum = parseInt(document.getElementById('startNum').value);
    const delay = parseInt(document.getElementById('delay').value);
    
    // Get display element and button
    const display = document.getElementById('countdownDisplay');
    const button = document.getElementById('startButton');
    
    // TODO: Validate inputs
    // Check if values are valid numbers
    // Check if start number is positive
    // Check if delay is at least 100ms
    
    // TODO: Disable button during countdown
    
    // TODO: Create the countdown loop
    // Use a for loop counting backwards
    // Use setTimeout to create the delay between numbers
    
    // TODO: Show "Blast off!" at the end
    
    // TODO: Re-enable button after countdown finishes
}

// Initialize the page
window.onload = function() {
    document.getElementById('countdownDisplay').textContent = 'Ready to start!';
};
