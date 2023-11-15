export const elementMerger=(arr)=>{
    var resultArr=arr
    while(resultArr.length>1){
        resultArr=[]
        for (let i = 0; i < arr.length-1; i++) {
            resultArr.push(Math.abs(arr[i]-arr[i+1]))
        }
        arr=resultArr
    }
    return resultArr[0]
}
