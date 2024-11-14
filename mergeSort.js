function merge(arr1, arr2) {
  let arr = []; 
  let i = 0; 
  let j = 0; 

  
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arr.push(arr1[i]);
      i++;
    } else {
      arr.push(arr2[j]);
      j++;
    }
  }


  while (i < arr1.length) {
    arr.push(arr1[i]);
    i++;
  }


  while (j < arr2.length) {
    arr.push(arr2[j]);
    j++;
  }

  return arr;
}

function mergesort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergesort(arr.slice(arr, mid));
  let right = mergesort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergesort([4, 3, 1, 2])); // output : [1,2,3,4]
