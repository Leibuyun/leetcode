/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((c1, c2) => c2[1] - c1[1]);
  let ans = 0;
  while (truckSize > 0 && boxTypes.length > 0) {
    const top = boxTypes.shift();
    if (top[0] <= truckSize) ans += top[0] * top[1];
    else ans += truckSize * top[1];
    truckSize -= top[0];
  }
  return ans;
};

// const boxTypes = [
//     [1, 3],
//     [2, 2],
//     [3, 1],
//   ],
//   truckSize = 4;
const boxTypes = [
    [5, 10],
    [2, 5],
    [4, 7],
    [3, 9],
  ],
  truckSize = 10;
console.log(maximumUnits(boxTypes, truckSize));
