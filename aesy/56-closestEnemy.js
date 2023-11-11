export const closestEnemy =(arr)=>{
    let enemy=0
    let comrad
    for(let i =0;i<arr.length;i++){
        if(arr[i]===1){
            comrad=i
        }
        else if(arr[i]===2&&enemy==0){
            enemy=i
        }
    }
    if(enemy-comrad<0){
        return (enemy-comrad)*-1
    }else{
        return enemy-comrad
    }
}
