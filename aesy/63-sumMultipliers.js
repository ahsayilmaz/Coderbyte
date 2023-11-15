export const sumMultipliers=(array)=>{
  array.sort((a,b)=>{return a-b})
  let len=array.length
  for(let i=1;i<len;i++){
    array[0]+=array[i]}
  if(array[len-1]*array[len-2]>array[0]*2){
    return true
  }
}
