export const ThreeSum =(numarr, target)=>{
    numarr=numarr.sort((a,b)=>{return a-b})
    let theArray=[]
    console.log(numarr)
    let b=numarr.length-1
    for(let i=0;i<numarr.length-2;i++){
        for(let a=i+1;a<numarr.length-1;a++){
            while(numarr[i]+numarr[a]+numarr[b]>target&&a<b){
                b--
            }
            if(numarr[i]+numarr[a]+numarr[b]==target){
                theArray.push([numarr[i],numarr[a],numarr[b]])
            }
            b=numarr.length-1
        }
    }
    for (let i = 0; i < theArray.length-1; i++) {
        for (let a = i+1; a < theArray.length-1; a++) {
            if(theArray[i].toString()===theArray[a].toString()){
                theArray.splice(a,1)
            }
        }
    }
    return theArray
}
