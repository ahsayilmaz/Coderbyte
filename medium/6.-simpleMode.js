export const simpleMode=(arr)=>{
    let modesArr=[]
    arr.forEach(element => {
        let foundVal=modesArr.find(obj=> obj.val==element)
        if(foundVal){foundVal.count++}
        else{modesArr.push({val:element,count:1})}
    });
    modesArr.sort((a,b)=>{a.count-b.count})
    if(modesArr[0]<2){return -1}
    for (let i = 0; i < modesArr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(arr[j]==modesArr[i].val){
                return modesArr[i].val  
            }
        }
    }
}
