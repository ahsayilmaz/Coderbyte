export const permutationStep=(num)=>{
    let temp
    let Greater=num.toString().split("")
    for (let i = Greater.length-1; i>0; i--) {
        Greater=num.toString().split("")
        temp=Greater[i]
        Greater[i]=Greater[i-1]
        Greater[i-1]=temp
        Greater=parseInt(Greater.join(""))
        if(Greater>num){
            return Greater
        }
    }
    return -1
}
