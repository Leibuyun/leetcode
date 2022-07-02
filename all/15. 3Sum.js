/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// todo
var threeSum = function (nums) {
  nums.sort((x1, x2) => x1 - x2);
  let res = [];
  for (let i = 0; i < nums.length - 2; ++i) {
    if (nums[i] > 0) break;
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      let low = i + 1,
        high = nums.length - 1;
      while (low < high) {
        const tmp = nums[i] + nums[low] + nums[high];
        if (tmp === 0) {
          res.push([nums[i], nums[low], nums[high]]);
          while (low < high && nums[low] === nums[low + 1]) low++;
          while (low < high && nums[high] === nums[high - 1]) high++;
          low++;
          high--;
        } else if (tmp > 0) {
          high--;
        } else {
          low++;
        }
      }
    }
  }
  return res;
};

// [ -4, -1, -1, 0, 1, 2 ]

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([]));
console.log(threeSum([0]));
console.log(threeSum([0, 0, 0, 0]));
console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));
