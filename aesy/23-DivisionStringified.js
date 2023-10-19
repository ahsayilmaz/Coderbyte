export const divisionStringified = (n1,n2) =>{
    return n1.toString().slice(0, -(n1.toString().split('').length - n2.toString().split('').length)).slice(0, n2.toString().split('').length - 3) + ","  + n1.toString().slice(0, -(n1.toString().split('').length - n2.toString().split('').length)).slice(n2.toString().split('').length - 3)
}
