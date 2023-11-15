export const camelCase=(str)=>{
    var strs=str.split(" ")
    let end=""
    strs.forEach(element => {
        let upper=element[0].toUpperCase()
        end+=upper
        for (let i = 1; i < element.length; i++) {
            end+=element[i]
        }
    });
    return end
}
