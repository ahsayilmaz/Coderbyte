export const intersection = (str) =>{
    let listint = str.map(str => str.split(", "))
    let flt = [].concat(...listint)
    const intered = flt.sort((a, b) =>{return b-a})
    return intered
}
