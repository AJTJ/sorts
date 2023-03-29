/*
Assumptions
- It assumes foreknowledge that all values will be within a range
- It assumes that all numbers will be real numbers
- NOT comparison-based. It utilizes hashing.

https://www.geeksforgeeks.org/counting-sort/
*/

let list = [1, 4, 1, 2, 7, 5, 2];

const findSizedVal = (data, isLarge) => {
  let num = data[0];
  for (let i = 1; i < data.length; i++) {
    if (isLarge) {
      num = Math.max(num, data[i]);
    } else {
      num = Math.min(num, data[i]);
    }
  }
  return num;
};

const countingSort = (data) => {
  const largestNum = findSizedVal(data, true);
  const outputArray = [...Array(data.length)];

  // this is + 1 to take into account that we are 0 indexed
  const countArray = [...Array(largestNum + 1)].map((e) => 0);

  console.log("empty array of 0s :", countArray);

  for (let i = 0; i < data.length; i++) {
    let num = data[i];
    countArray[num]++;
  }

  console.log("incremented countArray: ", countArray);

  let curSum = 0;
  // add sums
  for (let i = 1; i < countArray.length; i++) {
    countArray[i] += countArray[i - 1];
  }

  console.log("modded countArray: ", countArray);

  // build output array
  // in reverse for stability
  for (let i = data.length - 1; i >= 0; i--) {
    outputArray[countArray[data[i]] - 1] = data[i];
    countArray[data[i]]--;
  }

  return outputArray;
};

console.log("out", countingSort(list));
