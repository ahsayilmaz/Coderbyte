export const ltrchanger = (str) =>{
    const alphabeth= Array.from({length: 26}, (_, index) => String.fromCharCode(97+index))
    const Calphabeth= Array.from({length: 26}, (_, index) => String.fromCharCode(65+index))
    let list = str.split("")
    let index = 0
    list.forEach(element => {
        if(typeof element === 'string'){
            let temp = 0
            alphabeth.forEach(item => {
                if (item === element){if(element === "a" || element === "e" || element ==="i" || element ==="o" || element ==="u"){list[index] = Calphabeth[temp]}else{list[index]=alphabeth[temp+1]}}
                temp++
            })
            temp=0
            Calphabeth.forEach(item => {
                if (item === element){if(element === "A" || element === "E" || element ==="I" || element ==="O" || element ==="U"){list[index] = alphabeth[temp]}else{list[index]=alphabeth[temp+1]}}
                temp++
            })
        }
        index++
    });
    const changed=list.join('')
    return changed
}
