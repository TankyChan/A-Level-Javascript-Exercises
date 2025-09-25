// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const generateButton = document.getElementById('generateButton');
    const sequenceType = document.getElementById('sequenceType');
    const stepInput = document.getElementById('stepInput');
    
    // Show/hide step input based on sequence type
    sequenceType.addEventListener('change', function() {
        stepInput.classList.toggle('hidden', this.value !== 'steps');
    });
    
    // Add click event listener to the button
    generateButton.addEventListener('click', generateSequence);
});

// Function to generate number sequence
function generateSequence() {
    // TODO: Get the maximum number and sequence type from inputs
    
    // TODO: Initialize array to store sequence
    
    // TODO: Generate sequence based on type selected:
    // countUp: Use a for loop counting from 1 to N
    // countDown: Use a for loop counting from N down to 1
    // steps: Use a for loop with custom step value
    // even: Use a for loop with if statement to check even numbers
    // odd: Use a for loop with if statement to check odd numbers
    
    // TODO: Calculate sum of sequence
    
    // TODO: Display sequence, count of numbers, and sum
}
