export const productDigits =(num)=>{
    let numl=num.toString().length
    let temp=numl+1
    for (let i = 1; i <=9; i++) {
        let digitslength=(num/i).toString().length+i.toString().length
        if(num%i==0&&digitslength==numl){
            console.log(num/i)
            console.log(i+"b")
            temp=digitslength   
        }else if(num%i==0&&digitslength<temp) {
            console.log(num/i)
            console.log(i+"a")
            temp=digitslength
        }
    }
    let a = 0
    while (temp>numl) {
        for (let i = 1; i+(9*((10**a)+1)) <= 9+(90*(10**a)); i++) {
            let digitslength=(num/i).toString().length+i.toString().length
            if(num%i==0&&digitslength<temp) {
                console.log(num/i)
                console.log(i)
                temp=digitslength
            }
        }
        a++
    }
    return temp
}
