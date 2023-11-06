export const ScaleBalancing=(arr1,arr2)=>{
    let scaler1=0
    arr2.sort((a,b)=>{return a-b})
    let scaler2=arr2.length-1
    let i=0
    arr1[0]+=arr2[scaler2]
    arr1[1]+=arr2[scaler1]
    while(arr1[0]!=arr1[1]){
        arr1[0]-=arr2[scaler2]
        arr1[1]-=arr2[scaler1]
        scaler2--
        scaler1++
        if(scaler1>=scaler2||arr1[0]>arr1[1]){
            scaler1++
            scaler2=arr2.length-1
        }else if(scaler1==arr2.length){return "nein"}
        arr1[0]+=arr2[scaler2]
        arr1[1]+=arr2[scaler1]
    }
    return scaler1+","+scaler2
}
