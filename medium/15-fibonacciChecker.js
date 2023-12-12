export const fibonacciChecker=(n)=>{
    let fibo1=0
    let fibo2=1
    let total=0
    while(fibo1<n){
        total=fibo1+fibo2
        fibo1=fibo2
        fibo2=total
        if(n==fibo1){return true}
    }
    return false
}
