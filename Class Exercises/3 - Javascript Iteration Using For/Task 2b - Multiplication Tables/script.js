// TODO: Write the function to generate multiplication tables
function generateTables() {
    // Get input values
    const startNum = parseInt(document.getElementById('startNum').value);
    const endNum = parseInt(document.getElementById('endNum').value);
    const numTables = parseInt(document.getElementById('tables').value);
    
    // Clear previous output
    document.getElementById('tablesContainer').innerHTML = '';
    document.getElementById('stats').innerHTML = '';
    
    // TODO: Validate input values
    // Check if values are valid numbers and in correct range
    
    // TODO: Initialize counter for total calculations
    let totalCalculations = 0;
    
    // TODO: Create outer loop to generate multiple tables
    // This loop should run numTables times
    
        // TODO: Create a new table div for each multiplication table
        
        // TODO: Create inner loop for multiplication facts
        // This loop should run from startNum to endNum
        
            // TODO: Calculate the product
            
            // TODO: Create element for multiplication fact
            
            // TODO: Add even/odd styling
            
            // TODO: Increment total calculations
    
    // TODO: Display total calculations in stats div
}

// Initialize the page with a default table
window.onload = function() {
    generateTables();
};
