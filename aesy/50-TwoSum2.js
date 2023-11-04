export const TwoSum2 =(numArr, target)=>{
    numArr.sort()
    for (let i = 0; i < numArr.length; i++) {
        let a = numArr.length-1
        while(numArr[i]+numArr[a]>target&&a>i&&numArr[i]!=numArr[a]) {
            a--
        }
        if(numArr[i]+numArr[a]==target) {
            return "["+i+","+a+"]"
        }
    }
}
