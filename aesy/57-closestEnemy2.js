export const closestEnemy2=(list)=>{
    var comrad
    var enemy
    var distance
    var temp
    for(let i =0;i<list.length;i++){
        for(let a=0;a<list[i].length;a++) {
            if(list[i][a]==1){
                comrad={column:a,line:i}
            }
            
            if(list[i][a]==2&&comrad!=undefined){
                enemy={column:a,line:i}
                var tempcol=Math.abs(comrad.column-enemy.column)
                var templine=Math.abs(comrad.line-enemy.line)
                if(Math.abs(tempcol-4)<tempcol){
                    tempcol=Math.abs(tempcol-4)
                }
                if(Math.abs(templine-4)<templine){
                    templine=Math.abs(templine-4)
                }
                temp=tempcol+templine
                if(distance==undefined){distance=temp}
            }
            if(temp<distance){
                distance=temp
            }
        }
    }
    return distance
}
