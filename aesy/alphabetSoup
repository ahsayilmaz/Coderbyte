export const soup = (letters) =>{
    const listOfLetters = letters.slice("")
    let listOfNumbers = []
    for(let i =0;i<listOfLetters.length;i++){
        listOfNumbers.push(listOfLetters[i].charCodeAt())
    };
    const result = listOfNumbers.sort((a, b) => {return a-b})
    let intered = []
    result.forEach(element => {
        intered.push(String.fromCharCode(element))
    });
    return intered
}
