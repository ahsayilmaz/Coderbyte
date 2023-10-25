export const arrayMatching =(arr)=>{
    let arrayfnums1=arr[0].replace(/\[?\]?/, "").split(",")
    let arrayfnums2=arr[1].replace(/\[?\]?/, "").split(",")
    let endarr=[]

    for (let i = 0; i < arrayfnums1.length; i++) {
        if(isNaN(parseInt(arrayfnums1[i]))==0&&isNaN(parseInt(arrayfnums2[i]))==0) {
            endarr.push(parseInt(arrayfnums1[i])+parseInt(arrayfnums2[i]))
        }
    }
    return endarr
}
