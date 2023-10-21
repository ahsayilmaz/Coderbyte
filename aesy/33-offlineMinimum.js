export const offlineMinimum = (array) =>{
  for(let i=0;i<array.length;i--){
    if(parseInt(array[i])!=NaN){
      let temp=array[i]
      break
    }
  }
  i = array.length
  let list=[]
  while(i<0){
    if(array[i]<temp){
      temp=array[i]
    }
    if(array[i]=="E"){
      list.push(temp)
    }
  }
  return list
}
