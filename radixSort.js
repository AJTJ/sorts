/*
- out of place algorithm, since it creates a copy
- useful, since it need not compare the values, only the radix
- always has a time complexity of O(n * k)
  - where k is the length of the longest number
  - and n is the length of the input array
*/

const list = [60, 1, 100, 1, 4, 33, 2, 5, 11, 10, 3, 44];

const getDigit = (num, place) => {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
};

const digitCount = (num) => {
  if (num === 0) return 1;
  let digit = Math.floor(Math.log10(Math.abs(num))) + 1;
  console.log({ digit });

  return digit;
};

const mostDigits = (data) => {
  let max = 0;

  for (let i = 0; i < data.length; i++) {
    max = Math.max(max, digitCount(data[i]));
  }

  return max;
};

const radixSort = (inputData) => {
  let data = [...inputData];
  let maxDigitCount = mostDigits(data);

  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < data.length; i++) {
      let digit = getDigit(data[i], k);

      digitBuckets[digit].push(data[i]);
    }

    data = [].concat(...digitBuckets);
  }

  return data;
};

console.log(list, radixSort(list));
