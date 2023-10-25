export const binaryReverse =(num)=>{
    num=parseInt(num)
    let i=0
    while(num>2**(i+1)){
        i++
    }
    let str="00"
    while(num>0&&i>-1){
        if(num>=2**i){
            num-=2**i
            str+="1"
            i--
        }else {
            str+="0"
            i--
        }
    }
    str=str.toString().split("").reverse()
    let sum=0
    for (let i = 0; i < str.length; i++) {
        sum+=parseInt(str[i])*2**(str.length-1-i)
    }
    return sum
}
