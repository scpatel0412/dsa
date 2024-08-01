//approach1

function approach1(arr,n){
    n = n %arr.length
    console.log("n",n)
    let rotate = []

    for(let i =0 ; i< n; i++){
        rotate.push(arr[arr.length-n+i])
    }

   for(let i = 0 ; i < arr.length -n;i++){
    rotate.push(arr[i])
   }

   return rotate

}

console.log(approach1([1,2,3,4,5,6,7],2))