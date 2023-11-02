  export const decimalToRoman =(num)=>{
    let numl=num.toString().length
    let decimals =[{number:num%10,digit:10**(numl-1)}]
    let Roman=[{digit:1,roman:"I"},{digit:5,roman:"V"},{digit:10,roman:"X"},
    {digit:50,roman:"L"},{digit:100,roman:"C"},{digit:500,roman:"D"},{digit:1000,roman:"M"}]
    for (let i = numl-2; i>-1; i--) {
        num=Math.floor(num/10)
        decimals.push({number:num%10,digit:10**(numl-i-1)})
    }
    let string=""
    for (let i = decimals.length-1;i>-1;i--){
        let Rnum1 = Roman.find(Roman => Roman.digit === decimals[i].digit)
        if(decimals[i].number<10){
            if(decimals[i].number<4){
                for (let index = 0; index < decimals[i].number; index++) {
                    string=string+Rnum1.roman
                }
            }
        }
    }
    return string
}
