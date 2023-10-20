export const numAdd = (str) =>{
    let arraysp=str.split("")
    let MTarr=[""]
    let i=0
    for (let index = 0; index < arraysp.length; index++) {
        if(!isNaN(parseInt(arraysp[index]))){
            MTarr[i] = MTarr[i]+arraysp[index]
        }else if(MTarr[MTarr.length-1]!=''){
            i++
            MTarr.push("")
        }
    }
    if(MTarr[MTarr.length-1]==''){
        MTarr.pop()
    }
    i=0
    let sum=0
    while(i<MTarr.length){
        if(MTarr[i]!=0){
            sum+=parseInt(MTarr[i])
            i++
        }
    }
    return sum
}
