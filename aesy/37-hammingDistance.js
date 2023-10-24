export const hammingDistance =(input1, input2) =>{
  input.toString().split()
  let different=0
  for(let i=0;i<input.length;i++){
    if(input1[i]!=input[i]){
      different++
    }
  }
  return different
}
