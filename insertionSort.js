/*
- Best and worst O(n^2)
- Best case O(n), if already sorted
- Useful for items that are left to be inserted
- Or the array is small
*/

const list = [4, 3, 5, 1, 2];

// not in-place, but inserting, as per its namesake.
// it can be written in-place, swapping.
const insertionNewList = (inputList) => {
  let list = [];

  for (let i = 0; i < inputList.length; i++) {
    // place the new value on the end of the new list
    list.push(inputList[i]);

    // loop over the new list
    // the new insertable value is on the end
    for (let j = list.length - 1; j >= 0; j--) {
      let newVal = list[j];
      let prevVal = list[j - 1];

      if (prevVal !== undefined && prevVal > newVal) {
        // swap em if the prev val is larger
        [list[j - 1], list[j]] = [list[j], list[j - 1]];
      }
    }
  }
  return list;
};

console.log(list, insertionNewList(list));
