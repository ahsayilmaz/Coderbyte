export const bitWise = (array)=>{
    let n1=array[0].split("")
    let n2=array[1].split("")
    let end =""
    for (let i = 0; i < array[0].length; i++) {
        if(n1[i]==1||n2[i]==1){
            end+="1"
        }
        else{
            end+="0"
        }
    }
    return end
}
