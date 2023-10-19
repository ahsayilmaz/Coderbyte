export const meanMode = (listOfNums) =>{
    let Mean = 0;
    let i = 0;
    const arrlen=listOfNums.length;
    while(i!=arrlen){
        Mean +=listOfNums[i]
        i++
    }
    const meanEnd = Mean/arrlen
    listOfNums.sort((a,b)=>{return a-b})
    i=0

    let modeScores=[1]
    for(let i = 0; i<arrlen-1;i++){
        if(listOfNums[i]===listOfNums[i+1]){
            modeScores[modeScores.length-1]+=1
        }else{
            modeScores.push(1)
        }
    }
    const copymodesArray = [...modeScores]
    modeScores.sort((a, b) =>{return b-a})
    let sum =0
    for(i = 0; i<copymodesArray.length;i++){
        if(modeScores[0] === copymodesArray[i]){

            while(i>-1){
                sum+=copymodesArray[i]
                i--
            }
            return meanEnd===listOfNums[sum-1]
        }
    }
}
