export const ScaleBalancing=(arr1,arr2)=>{
    let scaler1=0
    arr2.sort((a,b)=>{return a-b})
    arr1.sort((a,b)=>{return a-b})
    let scaler2=arr2.length-1
    let i=0
    for (let i = 0; i < arr2.length; i++) {
        arr1[1]-=arr2[i]
        if(arr1[0]==arr1[1]){
            return arr2[i]
        }
        arr1[1]+=arr2[i]
    }
    arr1[0]+=arr2[scaler2]
    arr1[1]+=arr2[scaler1]
    while(arr1[0]!=arr1[1]&&scaler1!=arr2.length-1){
        if(scaler1>=scaler2||arr1[0]<arr1[1]){
            scaler1++
            scaler2=arr2.length-1
        }
        arr1[0]-=arr2[scaler2]
        arr1[1]-=arr2[scaler1]
        scaler2--
        arr1[0]+=arr2[scaler2]
        arr1[1]+=arr2[scaler1]
    }
    if(arr1[0]==arr1[1]){return arr2[scaler1]+","+arr2[scaler2]}
    else{return "nein"}
}
