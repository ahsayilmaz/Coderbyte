//a func that finds the middle element according to their numeric values in every sequential order of 3
export const slidingWindow=(arr)=>{
    let lowestL=[]
    let a
    let b
    let c
    let middle;
    for (let i = 0; i < arr.length-2; i++) {
        a = arr[i];
        b = arr[i+1];
        c = arr[i+2];
        if ((a - b) * (c - a) >= 0)
            middle = a;
        else if ((b - a) * (c - b) >= 0)
            middle = b;
        else
            middle = c;
        lowestL.push(middle)
        
    }
    return lowestL
}
