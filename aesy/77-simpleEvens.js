export const simpleEvens=(num)=>{
    let result=true
    let numDigits=num.toString().split("")
    numDigits.forEach(element => {
        if(parseInt(element)%2!=0){
            result=false
        }
    });
    return result
}
