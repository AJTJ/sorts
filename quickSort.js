// this is an in-place algorithm that mutates
const quickSort = (data, left, right) => {
  if (right <= left) {
    return;
  } else {
    let pivot = partition(data, left, right);
    quickSort(data, left, pivot - 1);
    quickSort(data, pivot + 1, right);
  }
  return data;
};

// chooses a pivot point that determines the right and left
// side of the sort
const partition = (data, left, right) => {
  let pivot = data[left];
  // grabbing the range to the right of the pivot
  let leftIndex = left + 1;
  let rightIndes = right;
};
