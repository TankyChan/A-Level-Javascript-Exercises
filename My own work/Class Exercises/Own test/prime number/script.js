document.getElementById('checkButton').addEventListener('click', function() {
    const min = document.getElementById('minnum').value;
    const max = document.getElementById('maxnum').value;
    findPrime(min,max);
});

function findPrime(minF,maxF){
    let checkNum = minF
    let prime = true
    let allprime = []
    while (checkNum <= maxF){
        let factor = 2
        if (checkNum < 2) {
            isPrime = false;
        }
        while ((factor <= Math.sqrt(checkNum))||(prime === true)){
            if (checkNum%factor===0){
                prime = false
            }
            factor++
        }
        if (prime = true){
            allprime.push(checkNum)
        }
        prime = true
        checkNum ++
    }
    console.log(allPrime);
}