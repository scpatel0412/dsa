//approach1 brute force
"use strict"
function approach1(arr){
    let temp = arr[0]
    for(let i=0;i<arr.length -1;i++){
        arr[i] = arr[i+1]
    }
    arr[arr.length -1] = temp
    return arr

}

console.log(approach1([0,4,3,1,6,7,3,2]))