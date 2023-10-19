export const userValidation = (input) =>{
  if(str.length>=4 && str.length<=25 && (/[a-zA-Z]/).test(str[0])&& (/\w([\-0-9])?/).test(str)
&& (/_$/).test(userName)!==true){
    console.log(true);
}else{
    console.log(false);
}
}
