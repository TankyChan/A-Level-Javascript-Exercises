// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateMortgage);
});

// Function to calculate the mortgage details
function calculateMortgage() {
    // TODO: Get all input values
    
    // TODO: Calculate deposit percentage
    
    // TODO: Set base interest rate (3%)
    
    // TODO: Adjust interest rate based on deposit percentage
    // 10-15%: Base rate + 2%
    // 16-25%: Base rate + 1%
    // Above 25%: Base rate
    
    // TODO: Adjust interest rate based on credit score
    // Excellent (800-950): -0.5%
    // Good (700-799): No change
    // Fair (600-699): +0.5%
    // Poor (below 600): +1%
    
    // TODO: Calculate maximum borrowing amount based on employment
    // Full-time: 4.5× salary
    // Self-employed: 4× salary
    // Part-time: 3.5× salary
    
    // TODO: Calculate required loan amount (house price - deposit)
    
    // TODO: Check if loan amount is within acceptable limit
    
    // TODO: Calculate monthly payment using the formula:
    // P = L[c(1 + c)^n]/[(1 + c)^n - 1]
    // Where:
    // P = Monthly Payment
    // L = Loan Amount
    // c = Monthly Interest Rate (Annual Rate / 12)
    // n = Total Number of Payments (25 years × 12)
    
    // TODO: Calculate total amount repayable
    
    // TODO: Display all results
}
