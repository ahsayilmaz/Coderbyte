export const dashInsert = (Input)=>{
    let inputs = Input.split("")
    for(let i = 0; i<inputs.length;i++){
        if(/[0-9]/.test(inputs[i])&&(inputs[i]/2)%1!=0&&/[0-9]/.test(inputs[i+1])&&(inputs[i+1]/2)%1!=0){
            inputs[i]=inputs[i]+"-"
        }
    }
    return inputs.join("")
}
