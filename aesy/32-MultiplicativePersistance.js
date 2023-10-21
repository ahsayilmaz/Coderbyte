export const multicativePersistance = (num)=>{
    let product =10
    let addP=0
    if(num<10){return 0}
    while(product>9){
        product=1
        while(num>0){
            product*=num%10
            num/=10
            num=Math.floor(num)
        }
        num=product
        addP++
    }
    return addP
}
