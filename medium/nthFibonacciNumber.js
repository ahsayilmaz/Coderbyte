export const nthFibonacciNumber=(n)=>{
    let fibo1=0
    let fibo2=1
    let total=0
    let which=0
    while(which<n){
        total=fibo1+fibo2
        fibo1=fibo2
        fibo2=total
        which++
    }
    return fibo1
}
