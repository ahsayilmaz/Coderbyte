export const vowel = (str) =>{
    let list = str.replace(/[^a-zA-Z]/, '').split('')
    let vowelCount = 0
    list.forEach(element => {
        if(/[a||i||o||u||e]/.test(element)){
            vowelCount++
        }
    });
    return vowelCount
}
