document.getElementById('checkButton').addEventListener('click', function() {
    const min = parseInt(document.getElementById('minnum').value);
    const max = parseInt(document.getElementById('maxnum').value);
    findPrime(min,max);
});

function findPrime(minF,maxF){
    let checkNum = minF
    let prime = true
    let allprime = []
    while (checkNum <= maxF){
        if (checkNum < 2) {
            prime = false;
        }else{
            let factor = 2 ;
            while ( factor <= Math.sqrt(checkNum) && prime === true ){
                if (checkNum%factor===0){
                    prime = false
                }
                factor++
            }
        }
        if (prime === true){
            allprime.push(checkNum)
        }
        prime = true
        checkNum ++
    }
    document.getElementById('resultMessage').innerHTML = allprime ;
}