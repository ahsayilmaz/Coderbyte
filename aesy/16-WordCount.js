export const wordCount = (sentence) =>{
    let list = sentence.split(' ')
    console.log(list)
    let kelimeSayısı = 0
    list.forEach(element => {
        if(/[A-Za-z]/.test(element)){
            kelimeSayısı++
        }
        });
    return kelimeSayısı
}
