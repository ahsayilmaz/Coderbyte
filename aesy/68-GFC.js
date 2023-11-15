export const GFC=(arr)=>{
    arr.sort((a,b)=>{return a-b})
    let temp=1
    for (let i = 1; i < arr[0]; i++) {
        let divider=arr[0]/i
        if(arr[0]%divider==0&&divider>temp&&arr[1]%divider==0){
            temp=divider
        }
    }
    return temp
}
