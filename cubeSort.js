/*
  https://codeofcode.org/lessons/cube-sort/

*/

const list = [6, 4, 8, 2, 3.55, 5, 9, 7, 1, 3];

const findSizedVal = (data, large) => {
  let num = data[0];
  for (let i = 1; i < data.length; i++) {
    if (large) {
      num = Math.max(num, data[i]);
    } else {
      num = Math.min(num, data[i]);
    }
  }
  return num;
};

const cubeSort = (data) => {
  // find the min value

  const minVal = findSizedVal(data, false);
  const maxVal = findSizedVal(data, true);

  console.log({ minVal, maxVal });

  // calc num of cubes
  const numCubes = maxVal - minVal + 1;

  // create a list of cubes
  const cubes = [...Array(numCubes)].map((e) => []);

  for (let i = 0; i < data.length; i++) {
    let num = data[i];
    cubes[Math.floor(num - minVal)].push(num);
  }

  for (let i = 0; i < cubes.length; i++) {
    let cube = cubes[i];
    cube.sort();
  }

  let sortedNumbers = [];

  console.log({ cubes });

  for (let i = 0; i < cubes.length; i++) {
    let cube = cubes[i];

    sortedNumbers = sortedNumbers.concat(cube);
  }

  return sortedNumbers;
};

console.log(list, cubeSort(list));
