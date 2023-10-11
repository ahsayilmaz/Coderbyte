export const Check = (str)=>{
    let list = str.split("")
    for (let i = 0; i < list.length - 4; i++) {
        if (list[i] === "a" && list[i + 4] === "b") {
          return true;
        }
    }
    return false
}
