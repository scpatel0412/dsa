//approach 1 optimal solutiom
function approach1(arr){
    let arr1 =[]
    for(let i=0; i< arr.length;i++){
        if(!arr1.includes(arr[i])){
            arr1.push(arr[i])
        }
    }
    return arr1
    // return arr.includes(2)
    
}

// approach2 optimal solution
 function approach2(arr){
    const uniqueArray = Array.from(new Set(arr))
    // return uniqueArray
    for(let i =0;i< arr.length;i++){
        arr[i] = uniqueArray[i]        
    }
    return arr.filter((i) => {return i !== undefined})
 }


console.log(approach1([1,2,2,3,5,4,4,5,6,6,3,5,8,9,1]),approach2([1,2,2,3,5,4,4,5,6,6,3,5,8,9,1]))