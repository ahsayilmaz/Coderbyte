export const formattedDivision=(num1,num2)=>{
    let splittedNum=(num1/num2).toString().split(".")
    splittedNum[0]=splittedNum[0].split("").reverse()
    let formattedNum=""
    for (let i = 0; i < splittedNum[0].length; i++) {
        formattedNum+=splittedNum[0][i]
        if(i%3==2){
            formattedNum+=","
        }
    }
    return formattedNum.split("").reverse().join("")+"."+splittedNum[1]
}
