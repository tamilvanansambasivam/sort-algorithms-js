function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i]; // Store the value of the current element
    let j = i - 1; // Start with the element before the current one
    // Shift elements to the right to make space for currentValue
    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j]; // Shift the element one position to the right
      j--; // Move to the next element on the left
    }
    arr[j + 1] = currentValue; // Place currentValue in the correct position
  }
  return arr;
}

console.log(insertionSort([3, 2, 0])); // Output: [0, 2, 3]
