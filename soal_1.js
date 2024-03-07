function isPrime(num) {
    if (num <= 1){
        return false;
}
for (let i = 2;i <= Math.sqrt(num);i++){
    if(num % i === 0){
        return false;
    }
}
return true;
}

function displayPrimes(){
    const n = 1000;
    console.log(" Berikut ini bilangan prima dari 1 sampai "+ n+".");
    for(let i = 2;i<= n;i++){
        if(isPrime(i)){
            console.log(i);
        }
    }
}

displayPrimes();