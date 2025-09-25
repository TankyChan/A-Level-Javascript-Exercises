// Add event listeners to all inputs
document.getElementById('xPosition').addEventListener('input', updateBox);
document.getElementById('yPosition').addEventListener('input', updateBox);
document.getElementById('boxWidth').addEventListener('input', updateBox);
document.getElementById('boxHeight').addEventListener('input', updateBox);
document.getElementById('boxColor').addEventListener('input', updateBox);

function updateBox() {
    // TODO:
    // 1. Get all input values:
    //    - X position
    //    - Y position
    //    - Width
    //    - Height
    //    - Color
    // 2. Update the box styles:
    //    - left position (use X value)
    //    - top position (use Y value)
    //    - width
    //    - height
    //    - background-color
    // 3. Update the value displays
    
    // Hint: Use element.style.property = value + 'px' for dimensions
    // Example: element.style.left = '100px'
    // For color, use element.style.backgroundColor = value
}
