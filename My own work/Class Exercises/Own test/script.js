// Event listener for the button click
document.getElementById('calcuButton').addEventListener('click', function() {
    const side = document.getElementById('sides').value;
    const length = document.getElementById('length').value;
    let area = checkNumber(side,length);
    document.getElementById('welcomeMessage').textContent = area 
});
function getTanFromDegrees(degrees) {
  return Math.tan((degrees * Math.PI) / 180);
}


checkNumber(sideF,lengthF) {
    let pi = Math.PI
    let advangle = 360/sideF
    let tanangle = function getTanFromDegrees(advangle)
    areaF =  ((lengthF**2)*(sideF)/(Math.tan(pi/2/sideF)))/4 ;
    return areaF
};