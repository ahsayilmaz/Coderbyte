export const longestWord = (word) =>{
    let list = word.replace(/[^a-zA-Z ]/g, "").split(" ")
    list.sort((x, y) => {return y.length - x.length})
    return list[0]
}