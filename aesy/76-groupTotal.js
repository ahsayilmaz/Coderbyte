export const groupTotal=(list)=>{
    let calcResult=[]
    let foundObject
    list.forEach(element => {
        element=element.split(":")
        foundObject = calcResult.find(obj => obj.name === element[0]);
        if(foundObject){
            console.log(parseInt(element[1]));
            foundObject.value+=parseInt(element[1])
        }else{
            calcResult.push({name:element[0],value:parseInt(element[1])})
        }
    });
    return calcResult
}
