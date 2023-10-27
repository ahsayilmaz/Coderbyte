export const Cap = (sentence) =>{
    let list= sentence.split(" ")
    let caped = list.map(word => word.charAt(0).toUpperCase() + word.slice(1))
    let result = caped.join(' ')
    return result
}
