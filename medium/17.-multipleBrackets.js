export const multipleBrackets=(str)=>{
    str=str.replace(/[^\(\)\[\]]/g,"").split("")
    let round=0
    let square=0
    while (str.length > 0) {
        let initialLength = str.length;
        for (let j = str.length-1; j >= 0; j--) {
            if(str[0]=="("&&str[j]==")"){
                str.splice(j,1)
                str.splice(0,1)
                round++
            }else if(str[0]=="["&&str[j]=="]"){
                str.splice(j,1)
                str.splice(0,1)
                square++
            }
        }
        if (initialLength === str.length) {
            return false;
        }
    }
    return true+" "+round+" "+square;
}
