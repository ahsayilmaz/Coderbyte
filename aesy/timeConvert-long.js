export const timeConvert = (sec) =>{
    let gün=0
    let saat = 0
    let dakika = 0
    let sn=0
    if(sec>86400 && short(sec, 86400)!==undefined){
        gün = short(sec, 86400)
    }
    let a=sec%86400
    if(sec>3600&&short(a, 3600)!==undefined){
        saat=short(a, 3600)
    }
    let b=a%3600
    if(sec>60&&short(b, 60)!==undefined){
        dakika=short(b, 60)
    }
    sn=b%60
    function short(sec, mod){
        let result=0
        while(sec>=mod){
            sec=sec-mod
            result++
        }
        return result
    }
    let ret = gün+":"+saat+":"+dakika+":"+sn
    return ret  
}
