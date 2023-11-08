export const timeDiffecence=(str1,str2)=>{
    str1=str1.split(":")
    str2=str2.split(":")
    let mins = str1[1]-str2[1]
    if(mins<=0){
        mins=mins+60
    }
    let hours=str1[0]-str2[0]
    if(hours<=0){
        hours=hours+24
    }
    if(mins<10){
        mins="0"+mins
    }
    return hours+":"+mins
}
