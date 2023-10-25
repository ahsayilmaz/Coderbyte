export const waveSorting =(array)=>{
    let arr = array
    function change(i){
        let n1=arr[i]
        let n2=arr[i+1]
        arr[i+1]=n1
        arr[i]=n2
    }
    let terminated=0
    let i =0
    while(terminated<=arr.length+1){
        if(i%2==0&&arr[i]<arr[i+1]){
            let n1=arr[i]
            let n2=arr[i+1]
            arr[i+1]=n1
            arr[i]=n2
        }
        else{
            terminated++
        }
        if(i%2!=0&&arr[i]>arr[i+1]){
            let n1=arr[i]
            let n2=arr[i+1]
            arr[i+1]=n1
            arr[i]=n2
        }else{
            terminated++
        }
        i++
        
    }
    let endstr=""
    for (let index = 0; index < arr.length; index++) {
        endstr+=arr[index]
        if(index%2!=0&&index<arr.length-1){
            endstr+="<"
        }else if(index<arr.length-1) {
            endstr+=">"
        }
    }
    return endstr
}
