// Framework: Function to calculate the area of a rectangle
function calculateArea(width, height) {
    // TODO: Fill in the logic to calculate and return the area
    let i = width*height
    return i 
}

// Event listener for the button
document.getElementById('calculateButton').addEventListener('click', function() {
    let width = parseFloat(document.getElementById('width').value);
    let height = parseFloat(document.getElementById('height').value);
    
    // Call the function and display the result
    let area = calculateArea(width, height);
    document.getElementById('areaResult').textContent = area;
});