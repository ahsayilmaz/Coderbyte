export const equivelantKeyPresses=(list)=>{
    let howManyEquilevant=0
    list[0]=list[0].split(",")
    list[1]=list[1].split(",")
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
