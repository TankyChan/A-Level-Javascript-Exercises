// Event listener for the button click
document.getElementById('calcuButton').addEventListener('click', function() {
    const side = document.getElementById('sides').value;
    const length = document.getElementById('length').value;
    checkNumber(side,length);
});

checkNumber(sideF,lengthF) {
    areaF =  ((lengthF**2)*(sideF)/(Math.tan(Math.PI/2/sideF)))/4 ;
};