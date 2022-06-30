/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  nums.sort((x1, x2) => x1 - x2);
  // nums = nums.sort(); // 这种不行，必须传入一个比较函数
  const middleIndex = parseInt(nums.length / 2);
  let ans = 0;
  for (let i = 0; i < middleIndex; ++i)
    ans += -nums[i] + nums[nums.length - i - 1];
  return ans;
};

/**
var minMoves2 = function (nums) {
  nums.sort((x1, x2) => x1 - x2);
  const middle = nums[parseInt(nums.length / 2)];
  return nums
    .map((val) => Math.abs(val - middle))
    .reduce((pre, cur) => pre + cur);
};
 */

const nums = [1, 2, 3];
console.log(minMoves2(nums));

// 13055441
// 12987535

// [x1, x2, x3, x4]
// [x2, x2, x2, x2] =  - x1 + x3 - x2 + x4 = -x1 - x2 + x3 + x4
// [x3, x3, x3, x3] = x3 - x1 - x2 + x4 = -x1 - x2 + x3 + x4

// [1, 2, 7, 8, 9, 19]
// [7, 7, 7, 7, 7, 7] = 6 + 5 + 1 + 2 + 3 = 17
// [8, 8, 8, 8, 8, 8] = 7 + 6 + 1 + 1 + 2 = 17

// [1, 2, 9, 11] = 1 + 7 + 9 = 17
// [1, 2, 9, 11] = 8 + 7 + 2 = 17
