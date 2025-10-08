// TODO: Write the function to generate the sequence
function generateSequence() {
    // Get input values
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);
    const step = parseInt(document.getElementById('step').value);
    
    // Get output element
    const output = document.getElementById('sequenceOutput');
    
    // TODO: Validate inputs
    // Check if values are valid numbers

    if (isNaN(start) || isNaN(end) || isNaN(step)) {
        output.innerHTML = "Check numbers are valid"
    }

    // Check if step is positive
    // Check if end is greater than start
    
    // TODO: Create array to store sequence
    let sequence = [];
    
    // TODO: Use for loop with step to generate sequence
    // Remember to use the step in the for loop increment
    for (i = start; i <= end; i += step) {
        sequence.push(i + "=>");
    }

    output.innerHTML = sequence;
    
    // TODO: Display the sequence
    // Join the numbers with arrows between them
}

// Initialize the page
window.onload = function() {
    //generateSequence();
};
