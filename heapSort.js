/*
- Probably one of the best algos for in-place
- as it has NO quadratic worst-case complexity
- for all cases it is O(nlogn)
*/

const list = [100, 60, 1, 4, 33, 3, 5, 2, 10, 11];

const heapSort = (inputData) => {
  let data = [...inputData];
  let len = data.length;

  // build max heap
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    createHeap(data, len, i);
  }

  // extract every element from the heap
  for (let i = len - 1; i > 0; i--) {
    let temp = data[0];
    data[0] = data[i];
    data[i] = temp;

    createHeap(data, len, 0);
  }

  return data;
};

const createHeap = (data, length, index) => {
  let largest = index;
  let left = 2 * index + 1;
  let right = 2 * index + 2;

  if (left < length && data[largest] < data[right]) {
    largest = right;
  }

  if (largest !== index) {
    [data[index], data[largest]] = [data[largest], data[index]];

    createHeap(data, length, largest);
  }
};

console.log(list, heapSort(list));
