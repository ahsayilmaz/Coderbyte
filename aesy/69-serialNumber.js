export const serialNumber=(str)=>{
    str=str.split(".")
    let isEven=false
    let isOdd=false
    let sum
    let a=0
    let LastGreater=0
    str.forEach(element => {
        sum=0
        element=element.split("")
        let theNum=parseInt(element[2])
        for(let i =0;i<element.length;i++){
            if(parseInt(element[i])<theNum){LastGreater++}
            sum+=parseInt(element[i])
        }
        
        if(a==0&&sum%2==0){
            isEven=true
        }else if(a==0){return false}
        if(a==1&&sum%2==1){
            isOdd=true
        }else if(a==1){return false}
        a++
    });
    return isEven && isOdd && LastGreater === 6 ? true : false;,
}
