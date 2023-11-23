export const rectangleArea=(list)=>{
    let coordinates=[]
    list.forEach(element => {
        coordinates.push(element.replace(/[^0-9]/g,"").split(""))
    });
    for (let i = 0; i < coordinates.length; i++) {
        for (let j = 0; j < coordinates.length-1; j++) {
            if(coordinates[i][1]!=coordinates[j][1]&&coordinates[i][0]!=coordinates[j][0]){
                return Math.abs(coordinates[i][1]-coordinates[j][1])*Math.abs(coordinates[i][0]-coordinates[j][0])
            }
        }
    }
    return "not a rectangle"
}
