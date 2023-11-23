export const distinctCharacters=(str)=>{
    let distinctChars = [...new Set(str)];
    return distinctChars.length;
}
