/*
- shell sort is an optimized version of insertion sort
*/

const list = [100, 60, 1, 4, 33, 3, 5, 1, 2, 10, 11];

const shellSort = (dataInput) => {
  let data = [...dataInput];
  let gap = Math.floor(data.length / 2);

  while (gap > 0) {
    for (let i = gap; i < data.length; i++) {
      let temp = data[i];

      let j = i;

      while (j >= gap && data[j - gap] > temp) {
        data[j] = data[j - gap];
        j -= gap;
      }
      data[j] = temp;
    }
    gap = Math.floor(gap / 2);
  }

  return data;
};

console.log(list, shellSort(list));

const list2 = [100, 60, 1, 4, 33, 3, 5, 1, 2, 10, 11];

const shellSort2 = (dataInput) => {
  let data = [...dataInput];
  let gap = Math.floor(data.length / 2);

  while (gap > 0) {
    for (let i = gap; i < data.length; i++) {
      // set the temp at this index
      // it should be larger than the value beneath the gap
      let temp = data[i];
      let j = i;

      // check that our index is currrently >= the gap
      // and that the lower value is larger
      while (j >= gap && data[j - gap] > temp) {
        // switch the two values
        data[j] = data[j - gap];

        // this is important, because you need to walk downwards
        j -= gap;
      }
      data[j] = temp;
    }
    // gap should become progressively smaller
    gap = Math.floor(gap / 2);
  }

  return data;
};

console.log("2", list2, shellSort2(list));
