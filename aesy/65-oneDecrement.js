export const oneDecrement=(num)=>{
    let numDigits=[]
    let theNum=num
    let howMany=0
    while(theNum>1){
        numDigits.push(theNum%10)
        theNum= Math.floor(theNum/10)
    }numDigits.reverse()
    for (let i = 0; i < numDigits.length; i++) {
        if(numDigits[i]-1==numDigits[i+1]){
            howMany++
        }
    }
    return howMany
}
