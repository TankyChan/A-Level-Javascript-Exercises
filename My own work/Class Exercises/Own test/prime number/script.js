document.getElementById('checkButton').addEventListener('click', function() {
    const min = document.getElementById('minnum').value;
    const max = document.getElementById('maxnum').value;
    findPime(min,max);
});

function findPime(minF,maxF){
    let checkNum = minF;
    let halfNum = 0;
    let prime = true
    let allprime = []
    while (checkNum < maxF+1){
        halfNum = checkNum/2
        let factor = 2
        while ((factor < halfNum)||(prime = true)){
            if (checkNum%factor===0){
                prime = false
            }
            factor++
        }
        if (prime = true){
            
        }
        prime = false
        checkNum ++
    }
}