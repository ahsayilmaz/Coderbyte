export const powerSet =(arr)=>{
    let result=[]
    let str =""
    for (let i = 0; i < 2**arr.length; i++){
        let tempBinary=Number(i).toString(2)
        let binaryArray= ("0".repeat(arr.length-tempBinary.length)+tempBinary).split("")
        for(let index=0; index<arr.length;index++) {
            if(arr[index]*binaryArray[index]!=0) {str+=arr[index]*binaryArray[index]}
        }
        result.push(str)
        str=""
    }
    return result
}
