export const starRating=(num)=>{
    let numHolder=num.toString().split(".")
    let resultStr=""
    for (let i = 0; i < parseInt(numHolder[0]); i++) {
        resultStr+="full "
    }
    if(parseInt(numHolder[1])>=50){
        resultStr+="full"
    }else{
        resultStr+="half "
    }
    for (let i = 0; i < 5-Math.round(num); i++) {
        resultStr+="empty "
    }
    return resultStr.trim()
}
