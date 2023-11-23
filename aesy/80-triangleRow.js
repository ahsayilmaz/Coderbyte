export const triangleRow=(num)=>{
    let pascal=[[0,1,0]]
    let sum=0
    for (let i = 0; i < num; i++) {
        pascal.push([0])
        for (let index = 0; index < pascal[pascal.length-2].length-1; index++) {
            if(i==num-1){
                sum+=pascal[pascal.length-2][index]+pascal[pascal.length-2][index+1]
                continue
            }
            pascal[pascal.length-1].push(pascal[pascal.length-2][index]+pascal[pascal.length-2][index+1])
        }
        pascal[pascal.length-1].push(0)
        if(pascal.length>2){pascal.splice(0,1)}
    }
    return sum
}
