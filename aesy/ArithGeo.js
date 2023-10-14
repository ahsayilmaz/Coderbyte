export const ArithGeo = (listOfNums)=>{
    const arithVariable = listOfNums[0] - listOfNums[1]
    const geoVariable = listOfNums[1]/listOfNums[0]
    let isArith =0
    let isGeo = 0
    for(let i = 1;i<listOfNums.length;i++){
        if(listOfNums[i]-listOfNums[i+1]===arithVariable){
            isArith++
        }
        if(listOfNums[i+1]/listOfNums[i]===geoVariable){
            isGeo++
        }
    }
    if(isArith===listOfNums.length-2){return "Arithmetic"}
    if(isGeo===listOfNums.length-2){return "Geometric"}
    else{return -1}
}
