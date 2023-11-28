export const stringScramble=(list)=>{
    let howManyEquilevant=0
    for (let i = 0; i < list[0].length; i++) {
        for (let j = 0; j < list[1].length; j++) {
            if(list[1][j]==list[0][i])
                howManyEquilevant++
            if(howManyEquilevant==list[0].length||howManyEquilevant==list[1].length)
                return true
        }
    }
    return false
}
