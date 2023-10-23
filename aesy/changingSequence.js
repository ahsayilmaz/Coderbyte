export const changingSequence = (arrayOfNums)=>{
    let tempNum = arrayOfNums[0]
    let temp =0
    let iOrD=0
    if(arrayOfNums[1]-tempNum<0){
        tempNum=arrayOfNums[1]
        iOrD=-1
    }
    else if(arrayOfNums[1]-tempNum>0){
        temp=arrayOfNums[1]
        iOrD=1
    }
    for(let i = 1;i<arrayOfNums.length;i++){
        if(arrayOfNums[i]-tempNum<0){
            tempNum=arrayOfNums[i]
            temp=-1
        }
        else if(arrayOfNums[i]-tempNum>0){
            tempNum=arrayOfNums[i]
            temp=1
        }
        if(iOrD!=temp){
            return i-1
        }
    }
}
