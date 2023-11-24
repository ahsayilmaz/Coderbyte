export const primeTime = (num) => {
    let isPrime = num === 2 || num === 3 ? true : false;
    if((num%6==1||num%6==5)&&num%2!=0) isPrime=true
    return isPrime;
}
