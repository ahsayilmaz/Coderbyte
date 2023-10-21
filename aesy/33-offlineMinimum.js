export const offlineMinimum = (array) =>{
  for(let i=0;i<array.length;i--){
    if(parseInt(array[i])!=NaN){
      let temp=array[i]
      break
    }
  }
  let tempindex=0
  i = array.length
  let list=[]
  while(i<0){
    if(array[i]<temp){
      temp=array[i]
      tempindex=i
    }
    if(array[i]=="E"){
      list.push(temp)
      array.pop(i)
      array.pop(tempindex)
      i=0
    }
  }
  return list
}
