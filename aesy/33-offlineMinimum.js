export const offlineMinimum = (array) =>{
    let temp
    let tempindex=0
    if(array[0]==='E'){
        array.splice(0,1)
    }
    for(let i=0;i<array.length;i++){
        if(!isNaN(parseInt(array[i]))){
            temp=parseInt(array[i])
            tempindex=i
            break
        }
    }
    let list=[]
    for (let i = 0; i < array.length; i++) {
        console.log(array);
        if(!isNaN(parseInt(array[i]))){
            if(parseInt(array[i])<temp){
                temp = parseInt(array[i])
                tempindex=i
            }
        }
        if(array[i]==='E'){
            list.push(temp)
            array.splice(i,1)
            array.splice(tempindex,1)
            i=0
            for(let i=0;i<array.length;i++){
                if(!isNaN(parseInt(array[i]))){
                    temp=parseInt(array[i])
                    tempindex=i
                    break
                }
            }
        }
    }
    return list
}
