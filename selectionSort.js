function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[i] > arr[j]) {
        minIndex = j;
      }
      if (arr[minIndex] < arr[i]) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
      console.log("sorted :", arr);
    }
  }

  return arr;
}
