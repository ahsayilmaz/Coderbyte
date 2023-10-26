export const twoSums =(arr, target)=>{
    let i=0
    let a=0
    while(i<arr.length){
        a=i
        while(a<arr.length){
            if(arr[i]+arr[a]===target){
                return [i,a]
            }
            a++
        }
        i++
    }
}
