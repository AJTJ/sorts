/*
- a hybrid, stable sorting algo derived from merge and insertion sort

*/

const timSort = (data) => {
  // default size of a partition
  const RUN = 32;
  const n = data.length;

  // sort the partitions using insertion sort
  for (let i = 0; i < n; i += RUN) {
    insertionSort(data, i, Math.min(i + RUN - 1, n - 1));
  }

  for (let s = RUN; s < n; size *= 2) {
    for (let left = 0; left < n; left += 2 * size) {
      const mid = left + size - 1;
      const right = Math.min(left + 2 * size - 1, n - 1);
      merge(array, left, mid, right);
    }
  }
};
