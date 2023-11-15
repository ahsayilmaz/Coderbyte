export const ASCIIconversion=(str)=>{
    return str.split("").reduce(function(result,letter){
        return result += letter.charCodeAt()
    }, "The ASCII converrsion is: ")
}
