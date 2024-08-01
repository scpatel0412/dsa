// approach 1 brute force

function approach1(arr){

    for(let i =0;i< arr.length;i++){
        for(let j =i+1;j<arr.length;j++){
            if(arr[j]<arr[i]){
                return false
            }
        }
    }
    return true
}

//approach 2 optimal solution

function approach2(arr){

    for(let i =0;i< arr.length;i++){
        
            if(arr[i]<arr[i-1]){
                return false
            }
        
    }
    return true
}

console.log(approach1([1,2,3,4,5]),approach2([1,2,3,4,5]))