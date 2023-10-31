export const productDigits =(num)=>{
    let numl=num.toString().length
    let temp=numl+1
    for (let i = 1; i <=9; i++) {
        let digitslength=(num/i).toString().length+i.toString().length
        if(num%i==0&&digitslength==numl){
            temp=digitslength   
        }else if(num%i==0&&digitslength<temp) {
            temp=digitslength
        }
    }
    let a = 0
    while (true) {
        for (let i = 1; i+(9*((10**a)+1)) <= 9+(90*(10**a)); i++) {
            let digitslength=(num/i).toString().length+i.toString().length
            if(num%i==0&&digitslength<temp) {
                temp=digitslength
            }
        }
        if(a>3){break}
        a++
    }
    return temp
}
