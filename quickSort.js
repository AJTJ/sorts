/*
- Worst-case O(n2), when the pivot element is always the greatest or smallest element
- best and average is O(nlog(n)) - when the pivot is the middle or near middle.
*/

const list = [4, 3, 5, 1, 2];

// // a wrapper to stop mutation
// const quickSortWrapper = (inputList) => {
//   const list = [...inputList];
//   return quickSort(list, 0, list.length - 1);
// };

// // this is an in-place algorithm that mutates
// const quickSort = (data, left, right) => {
//   if (left >= right) {
//     return data;
//   }
//   let pivotIndex = partition(data, left, right);
// //   left side
//   quickSort(data, left, pivotIndex - 1);
// // right side
//   quickSort(data, pivotIndex + 1, right);
//   return data;
// };

// const partition = (data, left, right) => {
//   let pivot = data[left];
//   let leftIndex = left + 1;
//   let rightIndex = right;

//   while (true) {
//     while (leftIndex <= rightIndex && data[leftIndex] <= pivot) {
//       leftIndex++;
//     }

//     while (rightIndex >= leftIndex && data[rightIndex] >= pivot) {
//       rightIndex--;
//     }

//     if (rightIndex <= leftIndex) {
//       break;
//     }

//     [data[leftIndex], data[rightIndex]] = [data[rightIndex], data[leftIndex]];
//   }

//   [data[left], data[rightIndex]] = [data[rightIndex], data[left]];

//   return rightIndex;
// };

// console.log(list, quickSortWrapper(list));

const quickSort = (data, left, right) => {
  if (right <= left) {
    return data;
  } else {
    const pivot = partition(data, left, right);
    // left side
    quickSort(data, left, pivot - 1);
    // right side
    quickSort(data, pivot + 1, right);
  }

  return data;
};

const partition = (data, left, right) => {
  // This pivot value is arbitrary,
  // it does not need to be in the middle of the dataArray
  let pivotValue = data[left];
  let leftI = left + 1;
  let rightI = right;

  while (true) {
    console.log("PRE", { data, leftI, rightI });
    while (leftI <= rightI && data[leftI] <= pivotValue) {
      leftI++;
    }
    while (rightI >= leftI && data[rightI] >= pivotValue) {
      rightI--;
    }

    if (rightI <= leftI) {
      break;
    }

    console.log("POST", { data, leftI, rightI });
    [data[leftI], data[rightI]] = [data[rightI], data[leftI]];
  }

  console.log(
    { left, leftI },
    "leftData:",
    data[left],
    "right:",
    { right, rightI },
    "rightData:",
    data[rightI]
  );

  [data[left], data[rightI]] = [data[rightI], data[left]];

  return rightI;
};

console.log(quickSort(list, 0, list.length - 1));
