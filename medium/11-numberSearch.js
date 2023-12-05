export const numberSearch = (str) => {
    str = str.replace(/[^a-zA-Z0-9]/g, "").split("");
    let numCount = 0;
    let letterCount = 0;
    let isNum = false;
    str.forEach((element) => {
        isNum = /[0-9]/.test(element);
        if(isNum){
            numCount+=parseInt(element)
        }else{
            letterCount++
        }
    });
    return Math.round(numCount/letterCount)
};
