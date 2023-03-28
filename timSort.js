import { insertionNewList } from "./insertionSort";
import { mergeSort } from "./mergeSort";
/*
- a hybrid, stable sorting algo derived from merge and insertion sort

*/

const list = [
  100, 60, 1, 4, 33, 3, 5, 1, 2, 10, 11, 322, 523, 643, 347, 345, 277, 1235,
  633, 232, 111, 222, 333, 444, 555, 773, 4775,
];

const timSort = (data) => {
  // default size of a partition
  // TODO: what does this change?
  const RUN = 5;
  const n = data.length;

  // sort the partitions using insertion sort
  for (let i = 0; i < n; i += RUN) {
    insertionSort(data, i, Math.min(i + RUN - 1, n - 1));
  }

  for (let size = RUN; size < n; size *= 2) {
    for (let left = 0; left < n; left += 2 * size) {
      const mid = left + size - 1;
      const right = Math.min(left + 2 * size - 1, n - 1);
      merge(array, left, mid, right);
    }
  }
};
