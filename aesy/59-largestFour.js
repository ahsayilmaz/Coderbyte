export const largestFour=(array)=>{
    array.forEach(element => {
        element.sort((a,b)=>{return b-a})
        console.log(element[0])
    });
}
