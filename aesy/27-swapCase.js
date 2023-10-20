export const swapCase =(sentence) =>{
    let arrayOfWords=sentence.split(" ")
    for (let i = 0; i < arrayOfWords.length; i++) {
        let arrayOfletters= arrayOfWords[i].split("")
        for (let index = 0; index < arrayOfletters.length; index++) {
            if(arrayOfletters[index].charCodeAt()>64&&arrayOfletters[index].charCodeAt()<91){
                arrayOfletters[index]=arrayOfletters[index].toLowerCase()
            }
            else if(arrayOfletters[index].charCodeAt()>96&&arrayOfletters[index].charCodeAt()<123){
                arrayOfletters[index]=arrayOfletters[index].toUpperCase()
            }
        }
        let end = arrayOfletters.join('')
        arrayOfWords[i]=end
    }
    return arrayOfWords.join(' ')
}
