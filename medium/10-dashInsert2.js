export const dashInsert2=(str)=>{
    str=str.split("")
    let resultString=str[0]
    for (let i = 0; i < str.length-1; i++) {
        if(str[i]%2==0&&str[i+1]%2==0){
            resultString+="*"+str[i+1]
        }else if(str[i]%2!=0&&str[i+1]%2!=0){
            resultString+="-"+str[i+1]
        }else{
            resultString+=str[i+1]
        }
    }
    return resultString
}
