/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
// https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/discuss/2198002/C%2B%2B-Solution-Using-Sliding-Window
// 滑动窗口
var maxScore = function (cardPoints, k) {
  let res = 0;
  for (let i = 0; i < k; ++i) res += cardPoints[i];
  let cur = res;
  let ss = k - 1,
    ee = cardPoints.length - 1;
  while (k > 0) {
    cur -= cardPoints[ss];
    cur += cardPoints[ee];
    k--;
    ss--;
    ee--;
    res = Math.max(cur, res);
  }
  return res;
};

console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3));
console.log(maxScore([2, 2, 2], 2));
console.log(maxScore([9, 7, 7, 9, 7, 7, 9], 7));
console.log(maxScore([11, 49, 100, 20, 86, 29, 72], 4));
