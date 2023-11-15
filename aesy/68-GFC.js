export const GFC=(arr)=>{
    arr.sort((a,b)=>{return a-b})
    let divider=0
    let dividerIndex=1
    for (let i = 1; i < arr[0]; i++) {
        let tempDivider=arr[0]/i
        if(arr[0]%tempDivider==0&&tempDivider>divider&&arr[1]%tempDivider==0){
            divider=tempDivider
            dividerIndex=i
        }
        if(dividerIndex>=tempDivider){break}
    }
    return divider
}
