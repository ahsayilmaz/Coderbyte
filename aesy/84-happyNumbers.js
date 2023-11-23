export const happyNumbers=(num)=>{
    let numHolder=num;
    let sum=0;
    let repetition=0;
    while(sum!=1){
        sum=0
        let numl=numHolder.toString().length;
        for (let i = 0; i<numl; i++) {
            sum+=(numHolder%10)**2;
            numHolder=Math.floor(numHolder/10);
        }
        numHolder=sum;
        repetition++;
        if(repetition>20){return "not a happy number";}
    }
    return "happy number";
}
