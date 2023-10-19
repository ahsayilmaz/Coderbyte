export const reverse = (string) =>{
    const list = string.split("")
    let rev =[]
    let len=list.length -1
    for (let i=len; i>=0; i--){
        rev.push(list[i])
    }
    const reversed = rev.join("")
    return reversed
}
