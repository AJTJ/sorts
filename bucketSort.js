const list = [100, 60, 4, 33, 3, 5, 1, 2, 10];

const bucketSort = (arr) => {
  let minVal = arr[0];
  let maxVal = arr[0];

  // the max amount of items in a bucket
  const bucketSize = 5;

  // set min and max values
  arr.forEach((val) => {
    if (val < minVal) {
      minVal = val;
    } else if (val > maxVal) {
      maxVal = val;
    }
  });

  // figure out how many buckets there need to be
  let bucketCount = Math.floor((maxVal - minVal) / bucketSize) + 1;

  // initiate the allBuckets object with an empty array for how many buckets we need
  let allBuckets = new Array(bucketCount);
  for (let i = 0; i < allBuckets.length; i++) {
    allBuckets[i] = [];
  }

  // divide each element in the array into the buckets
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    allBuckets[Math.floor((el - minVal) / bucketSize)].push(el);
  }

  let returnVal = [];

  console.log("ALL BUCKS", { allBuckets });

  // sort each bucket and push it to the main array
  for (let i = 0; i < allBuckets.length; i++) {
    const bucket = allBuckets[i];
    // just using built-in sort here, but it could be a better sort
    bucket.sort();

    returnVal = [...returnVal, ...bucket];
  }

  return returnVal;
};

console.log(list, bucketSort([...list]));
