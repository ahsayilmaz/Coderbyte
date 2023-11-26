export const primeTime = (n) => {
    n++
    let primes = new Array(n).fill(true);
    primes[0] = primes[1] = false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (primes[i]) {
            for (let j = i * i; j <n; j += i) {
                primes[j] = false;
            }
        }
    }

    return primes[n-1]
}
