export const factorial = (number) =>{
    let con = 1
    let i = number
    do{
        con*=i
        i-=1
    }
    while(i>1)
    return con
}
