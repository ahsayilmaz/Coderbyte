export const isPalindrom = (word) =>{
    let listOfLetters = word.replace(/[^a-zA-Z]/, '').split('')
    let areLetttersEqual = 0
    for(let i =0;i<parseInt(listOfLetters.length/2);i++){
        if(listOfLetters[i]===listOfLetters[listOfLetters.length-1 - i]){areLetttersEqual++}
    }
    return areLetttersEqual===parseInt(listOfLetters.length/2)
}
