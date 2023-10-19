export const minutesCount = (hours) =>{
    let singleHours = hours.replace(/[^0-9:-]/g, '').split("-")
    let HowMuchHours = singleHours[1].split(":")[0] - singleHours[0].split(":")[0]
    const amOrPm = hours.replace(/[^a-zA-Z-]/g, "").split("-")
    const firstH = amOrPm[0]===("am"||"AM")
    const secH = amOrPm[1] === ("pm"||"PM")
    if(firstH && secH){
        HowMuchHours+=12
    }
    if(firstH===false && secH===false){
        HowMuchHours+=12
    }
    return HowMuchHours
}
