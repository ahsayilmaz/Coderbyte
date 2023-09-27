export const factorial = (number) =>{
    let con = 1
    let a = number.toString()
    a.split(",")
    let b = number*(number-a[1]-1)
    do{
        con = con*i*(i-1)
        i=i-2
    }
    while(i>0)
    return con
}