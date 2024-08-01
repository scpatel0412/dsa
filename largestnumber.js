function largest2(arr) {
    const a = arr.sort((a,b) => {return a-b})[arr.length-1]
    return a
}

function largest1(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (max < arr[i]) {
        max = arr[i];
      }
    }
    return max;
}

console.log(largest1([2, 5, 1, 3, 0]),largest2([2, 5, 1, 3, 0]))