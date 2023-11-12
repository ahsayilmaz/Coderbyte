export const closestEnemy =(arr)=>{
    let enemy=0
    let comrad
    let uzaklik=0
    for(let i =0;i<arr.length;i++){
        if(arr[i]===1){
            comrad=i
        }
    }
    
    for(let i =0;i<arr.length;i++){
        if(arr[i]===2&&enemy==0){
            let geciciuzaklik = Math.abs(i-comrad)
            if (uzaklik == 0){
                uzaklik = geciciuzaklik
                enemy = i
            } 
            if(geciciuzaklik!=0 && uzaklik !=0 && (geciciuzaklik < uzaklik)){
                enemy = i
                uzaklik = geciciuzaklik
            }
        }
    }



    return uzaklik
}
