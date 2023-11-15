export const stringMerger=(str)=>{
    str=str.split("*")
    let result=""
    for (let i = 0; i < str[0].length; i++) {
        result+=str[0][i]+str[1][i]
        console.log("a");
    }
    return result
}
