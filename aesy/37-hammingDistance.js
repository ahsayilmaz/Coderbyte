export const hammingDistance =(input1, input2) =>{
    let n1= input1.toString().split("")
    let n2= input2.toString().split("")
    let different=0
    for(let i=0;i<n1.length;i++){
        if(n1[i]!=n2[i]){
            different++
        }
    }
    return different
}
