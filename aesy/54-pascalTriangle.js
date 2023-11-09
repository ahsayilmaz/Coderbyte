export const pascalTriangle =(Num)=>{
    let pascal=[[0,1,0]]
    for (let i = 0; i < Num-1; i++) {
        pascal.push([0])
        for (let index = 0; index < pascal[i].length-1; index++) {
            pascal[pascal.length-1].push(pascal[i][index]+pascal[i][index+1])
        }
        pascal[pascal.length-1].push(0)
    }
    for (let i = 0; i < Num-1; i++) {
        for (let index = 1; index < pascal[i].length-2; index++) {
            console.log(pascal[i][index])
        }
    }
}
