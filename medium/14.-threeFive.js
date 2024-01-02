export const threeFive=(n)=>{
    let isDividable=[]
    for(let i=3;i<n;i+=3){
        isDividable.push(i)
    }
    for (let i = 5; i < n; i+=5) {
        if(i%15==0){
            continue
        }else{
            isDividable.push(i)
        }
    }
    return isDividable.reduce((x,y)=>x+y, 0)
}
