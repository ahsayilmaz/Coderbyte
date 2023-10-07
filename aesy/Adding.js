export const adding = (num) =>{
    let total = 0
    if(num>=1){
        for(let i=num; i>=1;i--){
            total=total+i
        }
    }
    if(num<=-1){
        for(let i=num; i<0;i++){
            total=total+i
        }
    }

    
    return total
}
