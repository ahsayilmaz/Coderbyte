export const stringPeriod=(str)=>{
    var repeater=Math.floor(str.length/2 )
    let howManyEqual=1
    let k=0
    let isEqual=0
    let tester
    let repeatingsList=[]
    while (repeater>=2) {
        for (let i = 0; i < Math.floor(str.length/repeater); i++) {
            tester = ""
            for (let index = 0; index < repeater; index++) {
                tester += str[index]
            }
            for (let j = repeater+1; j < str.length; j++) {
                if(tester[k]==str[j]){
                    howManyEqual++
                }else{
                    if(isEqual>=2&&isEqual<4){
                        repeatingsList.push(tester)
                    }
                    k=0
                    howManyEqual=0
                }
                if(howManyEqual==repeater) {isEqual++}
                k++
                if(k==Math.floor(str.length/repeater)){k=0}
            }
            
        }
        repeater--
    }
    repeatingsList.sort((a,b)=>{return b-a})
    return repeatingsList
}
