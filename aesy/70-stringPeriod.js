export const stringPeriod=(str)=>{
    var repeater=Math.floor(str.length/2 )
    let howManyEqual=0
    let k
    let isEqual=1
    let tester
    while (repeater>=2) {
        for (let i = 0; i < str.length; i+=repeater) {
            tester = ""
            for (let index = i; index < repeater+i && repeater+i<str.length; index++) {
                tester += str[index]
            }
            if(tester.length<repeater){break}
            k=0
            for (let j = repeater+i; j < str.length; j++) {
                if(tester[k]==str[j]&&j%repeater==k){
                    howManyEqual++
                }else{
                    if(isEqual>=2){
                        return tester
                    }
                    k=0
                    howManyEqual=0
                }
                if(isEqual>=2){
                    return tester
                }
                if(howManyEqual==repeater) {isEqual++}
                k++
                if(k==repeater|| j==str.length-2){k=0}
            }
        }
        repeater--
    }
}
