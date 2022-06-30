// 1 0
// 1 1 1
// 1 1 1 3
// 1 1 1 1 = 3 + 2 + 1
// n 1 +2.. + n -1 = (n-1)(n)/2
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let ans = 0,
    left = 0,
    right = height.length - 1;
  while (left < right) {
    const tmepArea = Math.min(height[left], height[right]) * (right - left);
    if (tmepArea > ans) ans = tmepArea;
    /*
     当左边大的时候，若移动左边，
        新的左边高度若比原来左边高度高，但实际的高度以右边为准，因为右边低，导致面积不会变大
        若比左边高度低，则宽高都不会增大，面积自然也不会变大
        因此需要移动右边
      当右边大的时候，同理
     */
    if (height[left] > height[right]) right--;
    else left++;
  }
  return ans;
};

// O(n^2)
// var maxArea = function (height) {
//   let ans = 0;
//   for (let start = 0; start < height.length - 1; ++start) {
//     for (let end = start + 1; end < height.length; ++end) {
//       const tmp = (end - start) * Math.min(height[start], height[end]);
//       if (tmp > ans) ans = tmp;
//     }
//   }
//   return ans;
// };

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
