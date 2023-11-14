export const numberStream=(str)=>{
    var tempDigit=str[0]
    var counter=0
    var passedList=[]
    for (let i = 0;i < str.length; i++) {
        if(parseInt(str[i])==parseInt(tempDigit)){
            counter++
        }else if(parseInt(str[i-1])==counter) {
            passedList.push(parseInt(str[i-1]))
        }
        if(parseInt(str[i])!=parseInt(tempDigit)) {
            tempDigit=str[i]
            counter=1
        }
    }
    passedList.sort((a,b)=>{return b-a})
    return passedList[0]
}
