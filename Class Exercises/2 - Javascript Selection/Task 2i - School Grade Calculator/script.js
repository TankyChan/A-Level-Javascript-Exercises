// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateGrade);
});

// Function to convert percentage to letter grade
function getLetterGrade(percentage) {
    // TODO: Implement grade boundaries
    // A*: 90% and above
    // A: 80-89%
    // B: 70-79%
    // C: 60-69%
    // D: 50-59%
    // E: 40-49%
    // U: Below 40%
}

// Function to calculate weighted component grade
function calculateComponentGrade(grades, weights) {
    // TODO: Calculate weighted average of grades using weights
}

// Function to generate feedback based on grades
function generateFeedback(courseworkGrade, testGrade, participationGrade, finalGrade) {
    // TODO: Generate appropriate feedback based on:
    // - Component grades
    // - Areas of strength/weakness
    // - Attendance impact
    // - Overall performance
}

// Main calculation function
function calculateGrade() {
    // TODO: Get all input values
    
    // TODO: Calculate coursework grade (30% of total)
    // Assignment 1 (40%)
    // Assignment 2 (60%)
    
    // TODO: Calculate test grade (40% of total)
    // Mid-term (40%)
    // Final test (60%)
    
    // TODO: Calculate participation grade (30% of total)
    // Attendance (40%)
    // Activities (60%)
    // Check if attendance below 80% - cap participation at 50%
    
    // TODO: Check minimum requirements
    // At least 40% in both coursework and tests
    
    // TODO: Calculate final weighted grade
    
    // TODO: Apply grade restriction
    // Final grade cannot be more than one grade higher than test grade
    
    // TODO: Generate and display feedback
    
    // TODO: Update all output sections with calculations and results
}
