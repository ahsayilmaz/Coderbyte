export const largestFourSum=(list)=>{
    list.sort().reverse()
    let sum=0
    for (let i = 0; i < 4; i++) {
        sum+=list[i]
    }
    return sum
}
