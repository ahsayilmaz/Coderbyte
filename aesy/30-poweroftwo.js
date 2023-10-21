export const poweroftwo = (num) =>{
    while(num>1){
        num/=2
        if(num!=Math.floor(num)){return false}
    }
    if(num>0){return true}else{return false}
}
