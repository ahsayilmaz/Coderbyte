export const thirdG = (strArray)=>{
    strArray.sort((a,b)=>{return b.length-a.length})
    return strArray[2]
}
