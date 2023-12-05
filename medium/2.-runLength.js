export const runLength=(str)=>{
    let lettersCount=[]
    str=str.split("")
    str.forEach(element => {
        let foundLetter=lettersCount.find(object=>object.letter==element)
        if(foundLetter){
            foundLetter.count++
        }else{
            lettersCount.push({letter:element,count:1})
        }
    });
    let resultString=""
    lettersCount.forEach(element => {
        resultString+=element.count+element.letter
    });
    return resultString
}
