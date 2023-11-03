export const decimalToRoman =(num)=>{
    let numl=num.toString().length
    let decimals =[]
    let Roman=[{digit:1,roman:"I"},{digit:5,roman:"V"},{digit:10,roman:"X"},
    {digit:50,roman:"L"},{digit:100,roman:"C"},{digit:500,roman:"D"},{digit:1000,roman:"M"}]
    for (let i = numl-1; i>-1; i--) {
        decimals.push({number:num%10,digit:10**(numl-i-1)})
        num=Math.floor(num/10)
    }
    let string=""
    for (let i = decimals.length-1;i>-1;i--){
        let Rnum1 = Roman.find(Roman => Roman.digit === decimals[i].digit)
        if(decimals[i].number<4){
            for (let index = 0; index < decimals[i].number; index++) {
                string+=Rnum1.roman
            }
        }
        else if(decimals[i].number==(5-1)||decimals[i].number==(10-1)){
            let Rnum2 = Roman.find(Roman => Roman.digit === (decimals[i].digit*10))
            string+=Rnum1.roman+Rnum2.roman
        }
        else if(decimals[i].number>4&&decimals[i].number<9){
            let Rnum3 = Roman.find(Roman => Roman.digit === decimals[i].digit*5)
            string+=Rnum3.roman
            for (let index = 0; index < decimals[i].number-5; index++) {
                string+=Rnum1.roman
            }
        }
    }
    return string
}
