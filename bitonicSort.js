/*
- Bitonic sort only works when the input is a power of 2.
- Performs at O(n^2logn), which is slower than others, but it performs well with a parallel implementation because elements are compared in a predefined sequence, the "Bitonic Sequence"

Bitonic Sequence
- Elements are arranged in increasing order up to a certain index, and then they start decreasing

An array with A[0…i…n-1] is said to be bitonic, if there is an index i, such that -
A[0] < A[1] < A[2] .... A[i-1] < A[i] > A[i+1] > A[i+2] > A[i+3] > ... >A[n-1]  

https://www.javatpoint.com/bitonic-sort
*/

// important that it is a power of 2 (8)
const list = [100, 60, 1, 4, 33, 1, 10, 11];

// 1 - create a bitonic seequence from the random sequence
//    - ascending up to halfway, and then descending
// 2 - swap each place, / 2

const exchange = (data, i, j, isIncreasing) => {
  if (isIncreasing === data[i] > data[j]) {
    let temp = data[i];
    data[i] = data[j];
    data[j] = temp;
  }
};

const merge = (data, beg, len, isIncreasing) => {
  if (len > 1) {
    let k = Math.floor(len / 2);
    for (let i = 0; i < beg + k; i++) {
      exchange(data, i, i + k, isIncreasing);
    }
    merge(data, beg, k, isIncreasing);
    merge(data, beg + k, k, isIncreasing);
  }
};

const bitonicSort = (data, beg, len, isIncreasing) => {
  if (len > 1) {
    let k = Math.floor(len / 2);
    bitonicSort(data, beg, k, true);
    bitonicSort(data, beg + k, k, false);
    merge(data, beg, len, isIncreasing);
  }
};

const sort = (data, len, isIncreasing) => {
  bitonicSort(data, 0, len, isIncreasing);
};

const main = (inputData) => {
  let data = [...inputData];
  let len = data.length;
  let isIncreasing = true; // true is increasing

  sort(data, len, isIncreasing);
  return data;
};

console.log(list, main(list));
