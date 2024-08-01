//approach1 ------>

function approach1(arr) {

    const nonZero = [];
    const zero =[];

    for(let i=0; i<arr.length ; i++){
        if(arr[i] > 0){
            nonZero.push(arr[i])
        } else {
            zero.push(arr[i])
        }
    }

    return [...nonZero, ...zero]
}

console.log(approach1([0,14,1,0,1,4,0]))