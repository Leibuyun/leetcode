/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((x1, x2) => x1 - x2);
  let ans = nums[0] + nums[1] + nums[2],
    diff = Math.abs(ans - target);
  for (let i = 0; i < nums.length - 2; ++i) {
    let low = i + 1,
      high = nums.length - 1;
    while (low < high) {
      const tmp = nums[i] + nums[low] + nums[high];
      const tDiff = Math.abs(tmp - target);
      if (tDiff < diff) {
        ans = tmp;
        diff = tDiff;
      }
      if (tmp < target) low++;
      else if (tmp > target) high--;
      else return target;
    }
  }
  return ans;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
console.log(threeSumClosest([0, 0, 0], 1));
