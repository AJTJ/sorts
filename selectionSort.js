/*
- worst and average of O(n^2)
- could be useful if it is always compulsory to check all the elements
- Basically as efficient as bubble sort but with less swaps
- TODO: look into ShellSort and HeapSort (efficient variations)
*/

const list = [4, 3, 5, 1, 2];

const minSelectionSort = (inputList) => {
  let list = [...inputList];

  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[j] < list[i]) {
        [list[j], list[i]] = [list[i], list[j]];
      }
    }
  }

  return list;
};

console.log(list, minSelectionSort(list));
