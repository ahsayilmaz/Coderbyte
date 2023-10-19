export const AAddition = (arrayOfNums)=>{
    let Greatest = 0
    arrayOfNums.forEach(num => {
        if(num>Greatest){
            Greatest=num
        }
    });
    const sumArray = arrayOfNums.filter(char => char !==Greatest)
    let sum = 0
    sumArray.forEach(element => {
        sum+=element
    });
    if (sum === Greatest){return true}else{return false}
}
