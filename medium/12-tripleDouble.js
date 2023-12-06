export const tripleDouble=(n1,n2)=>{
    let repetition=[]
    let repetition2=[]
    n1.toString().split("").forEach(element => {
        let foundVal=repetition.find(obj=> obj.val==element)
        if(foundVal){foundVal.count++}
        else{repetition.push({val:element,count:1})}
    });
    n2.toString().split("").forEach(element => {
        let foundVal=repetition2.find(obj=> obj.val==element)
        if(foundVal){foundVal.count++}
        else{repetition2.push({val:element,count:1})}
    });
    let triple=repetition.find(obj=> obj.count==3)
    if(triple){let double=repetition2.find(obj=> obj.val==triple.val)}
    let result= triple&&double ? 1:0;
    return result
}
