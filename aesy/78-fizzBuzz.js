export const fizzBuzz=(num)=>{
    for (let i = 0; i < num; i++) {
        let isDividible=i  % 15 === 0 ? "FizzBuzz" : i  % 3 === 0 ? "Fizz" : i  % 5 === 0 ? "Buzz": i;
        console.log(isDividible);        
    }
}
