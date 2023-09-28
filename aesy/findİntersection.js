export const intersection = (str) =>{
    for (let i=0; i<str.length; i++){
        str.replace(str[i], str[i].parseInt())
    }
    const intered = str.sort((a, b) =>{return b-a})
    return intered
}
