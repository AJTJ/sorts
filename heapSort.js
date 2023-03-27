/*
- Probably one of the best algos for in-place
- as it has NO quadratic worst-case complexity
- for all cases it is O(nlogn)
*/

const list = [60, 1, 100, 1, 4, 33, 2, 5, 11, 10, 3, 44];

const heapSort = (inputData) => {
  let data = [...inputData];
  let len = data.length;

  // build max heap by rearranging the array
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    createMaxHeap(data, len, i);
  }

  // extract every element from the heap
  for (let i = len - 1; i > 0; i--) {
    [data[i], data[0]] = [data[0], data[i]];

    createMaxHeap(data, i, 0);
  }

  return data;
};

const createMaxHeap = (data, length, index) => {
  let largest = index;
  let left = 2 * index + 1;
  let right = 2 * index + 2;

  if (left < length && data[index] < data[left]) {
    largest = left;
  }

  if (right < length && data[largest] < data[right]) {
    largest = right;
  }

  if (largest !== index) {
    [data[index], data[largest]] = [data[largest], data[index]];

    createMaxHeap(data, length, largest);
  }
};
