export const overLapping =(arr)=>{
    for(let i =arr[0];i<=arr[1];i++){
        for(let index =arr[2];index<=arr[3];index++){
            if(index==i){
                arr[4]--
            }
        }
    }
    if(arr[4]==0){
        return true
    }
    return false
}
