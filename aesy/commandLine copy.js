// Parses a command-line string and adjusts the lengths of tokens and values.
export const commandLine = (str) => {
    // Splitting the input string based on '='
    str = str.split("=")
    
    // Array to store token and value lengths
    let lengthsArray = []

    // Counting lengths of tokens and values and storing in lengthsArray
    str.forEach(element => {
        let len = element.length
        element = element.split(" ")
        lengthsArray.push({ value: element[element.length - 1].length, token: len - element[element.length - 1].length - 1 })
    });

    // Reversing the order for correct processing
    let resultString = lengthsArray[0].value + "="

    // Constructing the result string
    for (let i = 1; i < lengthsArray.length - 1; i++) {
        resultString += lengthsArray[i].token + " " + lengthsArray[i].value + "="
    }
    
    // Adding the last value to the result string
    resultString += lengthsArray[lengthsArray.length - 1].value

    return resultString
}
