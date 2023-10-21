export const additivePersistence =(num) =>{
    let sum =10
    let addP=0
    if(num<10){return 0}
    while(sum>9){
        sum=0
        while(num>0){
            sum+=num%10
            num/=10
            num=Math.floor(num)   
        }
        num=sum
        addP++
    }
    return addP
}
