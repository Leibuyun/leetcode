const cmp = (x1, x2) => x1 - x2;
const getMaxDif = (arr, max) => {
  arr.sort(cmp);
  arr.unshift(0);
  arr.push(max);
  let maxDif = -1;
  for (let i = 1; i < arr.length; ++i) {
    let dif = arr[i] - arr[i - 1];
    if (dif > maxDif) maxDif = dif;
  }
  console.log(maxDif);
  return maxDif;
};
/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function (h, w, horizontalCuts, verticalCuts) {
  return (
    (BigInt(getMaxDif(horizontalCuts, h)) *
      BigInt(getMaxDif(verticalCuts, w))) %
    BigInt(1e9 + 7)
  ).valueOf();
};

console.log(maxArea(5, 4, [1, 2, 4], [1, 3]));
console.log(maxArea(5, 4, [3, 1], [1]));
console.log(maxArea(5, 4, [3], [3]));
console.log(maxArea(1000000000, 1000000000, [2], [2]));
