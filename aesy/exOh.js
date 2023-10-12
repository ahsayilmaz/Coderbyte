export const exOh = (str)=>{
    let numOfx = 0
    let numOfo = 0
    let list = str.split('')
    for(let i = 0; i<list.length; i++){
        if(list[i]==="x"){
            numOfx++
        }
        if(list[i]==="o"){
            numOfo++
        }
    }
    if (numOfo===numOfx){return true}else{return false}
}
