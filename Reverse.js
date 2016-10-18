'use strict';
const index = function(arr, val) {
  for(let f = 0; f < arr.length; f++) {
    if(arr[f] === val)
      return f;
  }
}

const reverse = function(arr){
    const R= arr.map(function(current){
    return arr[arr.length - index(arr,current) -1]; 
    })
    return R;
}

console.log(reverse([1, 2, 3, 4, 5, 6, 7]));


