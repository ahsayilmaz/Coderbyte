export const firstNonRepeatingCharacter =(str)=>{
    str=str.split("")
    let letters =[{letter:str[0],repetition:1}]
    for (let i = 1; i < str.length; i++) {
        let letterToUpdate1 = letters.find(letters => letters.letter === str[i].toLowerCase());
        let letterToUpdate = letters.find(letters => letters.letter === str[i]);
        if (letterToUpdate||letterToUpdate1){
            letterToUpdate.repetition+=1
        }else{
            letters.push({letter:str[i],repetition:1})
        }
    }
    let end=letters.find(letters => letters.repetition === 1);
    return end.letter
}
