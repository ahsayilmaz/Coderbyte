export const stringReduction=(str)=>{
    str=str.split("")
    let elementsArr=["a","b","c"]
    let tempLetter
    let totalTemp
    while(str.length>1){
        for (let i = 0; i < str.length-1; i++) {
            tempLetter=""
            totalTemp=0
            for (let i = 0; i < elementsArr.length; i++) {
                totalTemp+=elementsArr.indexOf(str[i])
                if(str[i]==tempLetter){
                    continue
                }
                tempLetter=str[i]
            }
            str[i]=elementsArr[3-totalTemp]
            str.splice(i+1,1)
            console.log(str);
            if(str[i]==undefined){
                return str.length
            }
        }
    }
    return str.length
}
