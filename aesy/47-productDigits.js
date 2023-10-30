export const productDigits =(num)=>{
    let numl=num.toString().length
    let temp=0
    for (let i = 1; i <=9; i++) {
        let digitslength=(num/i).toString().length+i.toString().length
        if(num%i==0&&digitslength==numl){
            return numl
        }else if(num%i==0&&digitslength>numl) {
            temp=numl+i.toString().length
        }
    }
    let a = 1
    while (temp>numl+1) {
        for (let i = 1; i+9*(10**a+1) <=9+90*10**a; i++) {
            let digitslength=(num/i).toString().length+i.toString().length
            if(num%i==0&&digitslength==numl){
                return numl
            }else if(num%i==0&&digitslength>numl) {
                temp=numl+i.toString().length
            }
        }
        a++
    }
    return temp
}
