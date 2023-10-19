export const Symbols = (entry) => {
    const slpitt = entry.split("")
    for(let i =0;i<entry.length;i++){
        if(slpitt[i]==="+"&& /[a-zA-Z]/.test(slpitt[i+1]) &&slpitt[i+2]==="+"){
            return true
        }
    }
    return false
}
