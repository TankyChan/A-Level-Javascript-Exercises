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
    let output = ""
    let loop = 1
    while (loop < allprime.length+1){
        output = output+allprime[loop-1]+" "
        if ((loop%10===0)&&(loop>=10)){
            output = output+ '<br/>'
        }
        loop++
    }
    document.getElementById('resultMessage').innerHTML = output ;
}