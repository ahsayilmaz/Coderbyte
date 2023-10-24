export const superIncreasing =(array)=>{
    let sum =array[0]
    for (let i = 1; i < array.length; i++) {
        if(sum<array[i]){
            sum+= array[i];
        }
        else{return false}
    }
    return true
}
