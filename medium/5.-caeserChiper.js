export const caeserChiper=(str,n)=>{
    let chriptedPass=""
    str.split("").forEach(element => {
        element=element.charCodeAt()+n
        chriptedPass+=String.fromCharCode(element)
    });
    return chriptedPass
}
