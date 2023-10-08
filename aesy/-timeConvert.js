export const timeConvert = (sec) =>{
    function short(sec, mod){
        let result=0
        while(sec>=mod){
            sec=sec-mod
            result++
        }
        return result
    }
    if(sec>86400){
        if(short(sec, 86400)!==undefined){
            let gün = short(sec, 86400)
        }else{ let gün=0}
    }
    else if(sec>3600){
        if(short(sec, 3600)!==undefined){
            let saat=short(sec, 3600)
        }else{saat=0}
    }
    else if(sec>60){
        let dakika=0
        dakika=short(sec, 60)
    }
    else{
        let sn=0
        sn=sec
    }
    return gün+":"+saat+":"+dakika+":"+sn
}
