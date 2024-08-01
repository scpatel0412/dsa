//approach 1 brute force

function approach1 (arr){
    const ab = arr.sort((a,b) => {
        return a-b
    })
    return {
        secondsmallest:ab[1],
        secondlargest:ab[ab.length -2]
    }

}

//approach 2 better approach

function approach2(arr){
    let max = arr[0];
    let small=arr[0];
    let second_small =Infinity
    let second_large = -Infinity
    for(let i = 0; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i]
        }
    }

    for (let j =0; j <= arr.length; j++){
        if(small > arr[j]){
            small = arr[j]
        }
    }
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < second_small && arr[i] !== small)
          second_small = arr[i];
        if (arr[i] > second_large && arr[i] !== max)
          second_large = arr[i];
      }
      return [second_large, second_small]
}

// optimal solution

function approach3(arr){
    let max = arr[0];
    let small=arr[0];
    let second_small =Infinity
    let second_large = -Infinity
    for(let i = 0; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i]
        }
        if (arr[i] > second_large && arr[i] !== max){
            second_large = arr[i];
        }
    }

    for (let j =0; j <= arr.length; j++){
        if(small> arr[j]   ){
            second_small = small;
            small = arr[j]
            
        }
        if (arr[j] < second_small && arr[j] !== small){
            second_small = arr[j];
        }
    }
    

      return [second_large, second_small]
}

console.log(approach1([2, 5, 1, 3, 0]),approach2([2, 5, 1, 3, 0]),approach3([2, 5, 1, 3, 0]))