// Add event listeners to all controls
document.getElementById('fontSize').addEventListener('input', updateStyles);
document.getElementById('fontFamily').addEventListener('change', updateStyles);
document.getElementById('alignLeft').addEventListener('click', () => updateAlignment('left'));
document.getElementById('alignCenter').addEventListener('click', () => updateAlignment('center'));
document.getElementById('alignRight').addEventListener('click', () => updateAlignment('right'));
document.getElementById('boldText').addEventListener('change', updateStyles);
document.getElementById('italicText').addEventListener('change', updateStyles);

function updateAlignment(alignment) {
    // TODO:
    // 1. Update the text alignment of the preview text
    // 2. Update the current alignment display
}

function updateStyles() {
    // TODO:
    // 1. Get all style values:
    //    - Font size from number input
    //    - Font family from select
    //    - Bold and italic from checkboxes
    // 2. Update the preview text styles
    // 3. Update the current styles display
    
    // Hint: For bold/italic, use element.style.fontWeight = 'bold' or 'normal'
    // and element.style.fontStyle = 'italic' or 'normal'
}
