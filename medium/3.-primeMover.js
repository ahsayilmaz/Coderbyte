export const primeMover=(n)=>{
    n=n**2
    let movingCount=0
    let tempNum
    let primes = new Array(n).fill(true);
    primes[0] = primes[1] = false;

    for (let i = 2; i <= n; i++) {
        if (primes[i]) {
            for (let j = i * i; j <n; j += i) {
                primes[j] = false;
            }
            movingCount++
            tempNum=i
            console.log(tempNum);
        }
        if(movingCount==n**(1/2)){
            return tempNum
        }
    }
}
