export const question = (input) =>{
    if (input <5){
    return false}
    const clear= input.replace(/^0-9?/, "")
    const list = clear.split("")
    let sum = 0
    let temp = 0
    list.forEach(element => {
        if(element != "?"){
            sum = parseInt(element)+parseInt(list[temp])
            
        }
        temp++
    })

    if (sum =10){
        return true
    }   
    else{
        return false
    }
}
