export const largestPair =(num)=>{
    num=num.toString().split("")
    if(num.length<2){return false}
    let fdigit =0
    let sdigit=0
    for (let i = 0; i < num.length; i++) {
        let temp = parseInt(num[i])
        if(temp%2==0&&i!=0&&parseInt(num[i-1])>fdigit){
            fdigit=num[i-1]
            sdigit=num[i]
        }
    }
    let endNum=fdigit+sdigit
    return parseInt(endNum)
}
