export const palindromeSwapper =(str)=>{
    let tempstr=str.split("")
    let placeHolder=tempstr
    let areLetttersEqual
    let temp
    for (let i = 0; i < str.length-1; i++) {
        placeHolder=[...tempstr]
        str=placeHolder
        areLetttersEqual=0
        temp=str[i]
        str[i]=str[i+1]
        str[i+1]=temp
        for(let i =0;i<parseInt(str.length/2);i++){
            if(str[i]===str[str.length-1 - i]){areLetttersEqual++}
        }
        if(str.length>=str.length-2&&areLetttersEqual===parseInt(str.length/2)){
            return str.join("")
        }else{
            for(let j=i+1;j<str.length-1;j++){
                areLetttersEqual=0
                temp=str[j]
                str[j]=str[j+1]
                str[j+1]=temp
                for(let i =0;i<parseInt(str.length/2);i++){
                    if(str[i]===str[str.length-1 - i]){areLetttersEqual++}
                }
                if(str.length>=str.length-2&&areLetttersEqual===parseInt(str.length/2)){
                    return str.join("")
                }
            }
        }
    }
    return -1
}
