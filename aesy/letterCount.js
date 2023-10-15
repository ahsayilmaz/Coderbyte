export const letterCount = (sentence) =>{
    let listOfWords = sentence.replace(/[^a-zA-Z ]/, '').split(' ')
    let sumArray=[]
    listOfWords.forEach(element => {
        let scoreArray = new Array(26).fill('0')
        const listOfLetters = element.split('')
        for(let i = 0;i<listOfLetters.length; i++){
            let ascııNum = listOfLetters[i].charCodeAt()
            if(ascııNum>96){
                scoreArray[ascııNum-97]++
            }
            if(ascııNum>64){
                scoreArray[ascııNum-65]++
            }
        }
        let sum =0
        scoreArray.forEach(item => {
            if(item>=3){
                sum+=item
            }
            if(item===2){
                sum++
            }
        });
        sumArray.push(sum)
    });
    const copysumArray = [...sumArray]
    sumArray.sort((a, b) =>{return b-a})
    for(let i = 0; i<copysumArray.length;i++){
        if(sumArray[0] === copysumArray[i]){
            return listOfWords[i]
        }
    }
}
