export const consecutive=(arr)=>{
    arr=arr.sort((a,b)=>{return a-b})
    let needed=0
    for (let i = 0; i < arr.length-1; i++) {
        needed+=Math.abs(arr[i]-arr[i+1])-1
    }
    return needed
}
