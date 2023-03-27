/*
Basically a bad sort.
- The ultimate naive example
- very slow, with a worst and average case of O(n^2)
- best case is O(n), with already sorted data.
*/

const mainList = [4, 3, 5, 1, 2];

const bubble = (inputList) => {
  const list = [...inputList];
  let swapped = true;

  while (swapped === true) {
    swapped = false;
    for (let i = 0; i < list.length; i++) {
      let cur = list[i];
      let next = list[i + 1];
      if (next !== undefined) {
        if (cur > next) {
          list[i] = next;
          list[i + 1] = cur;
          swapped = true;
        }
      }
    }
  }

  return list;
};

console.log(mainList, bubble(mainList));
