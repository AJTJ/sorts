/*
  - worst case & average of O(n * log(n));
  - 
*/

const list = [4, 3, 5, 1, 2];

const mergeSort = (data) => {
  // first step is break the data down into single items
  if (data.length < 2) {
    return data;
  }

  let middle = Math.floor(data.length / 2);

  let left = mergeSort(data.slice(0, middle));
  let right = mergeSort(data.slice(middle));

  return merge(left, right);
};

const merge = (left, right) => {
  let arr = [];
  while (true) {
    if (!left.length) {
      arr = [...arr, ...right];
      break;
    }

    if (!right.length) {
      arr = [...arr, ...left];
      break;
    }
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  return arr;
};

console.log(list, mergeSort([...list]));

// ANOTHER VARIATION
// const merge = (left, right) => {
//   let arr = [];
//   while (left.length && right.length) {
//     if (left[0] < right[0]) {
//       arr.push(left.shift());
//     } else {
//       arr.push(right.shift());
//     }
//   }
//   return [...arr, ...left, ...right];
// }
