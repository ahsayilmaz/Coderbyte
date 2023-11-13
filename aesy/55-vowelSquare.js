export const vowelSquare =(list)=>{
    for (let i = 0; i < list.length; i++) {
        for (let index = 0; index < list[i].length; index++) {
            if((/[a||i||o||u||e]/.test(list[i][index]) && /[a||i||o||u||e]/.test(list[i][index+1]))&&(/[a||i||o||u||e]/.test(list[i+1][index]) && /[a||i||o||u||e]/.test(list[i+1][index+1]))){
                return list[i][index]+list[i][index+1]+"\n"+list[i+1][index]+list[i+1][index+1]
            }
        }
    }
    
}
