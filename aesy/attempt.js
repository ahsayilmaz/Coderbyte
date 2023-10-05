export const attempt = () =>{
    let fruits = ["banana", "apple", "orange", "mango"];
    let split= fruits.map(fruit => fruit.split(/(,\s?)?a?/g));
    let con = [].concat(...split)
    console.log(con);
}
