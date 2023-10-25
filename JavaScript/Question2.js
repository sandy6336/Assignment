function descendingBubbleSort(arr) {
    const len = arr.length;
  
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (arr[j] < arr[j + 1]) {
          // Swapping elements if they are in the wrong order (descending)
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  
    return arr;
  }
  
  const originalArray = [5, 2, 9, 1, 5, 6];
  const sortedArray = descendingBubbleSort(originalArray);
  
  console.log(sortedArray); 
  