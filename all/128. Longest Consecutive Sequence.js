/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length <= 1) return nums.length;
  nums.sort((x1, x2) => x1 - x2);
  let maxLength = 0,
    preValue = nums[0];
  let idx = 1,
    cnt = 1;
  while (idx < nums.length) {
    if (nums[idx] - 1 === preValue) {
      preValue++;
      cnt++;
      if (cnt > maxLength) maxLength = cnt;
    } else if (nums[idx] !== preValue) {
      cnt = 1;
      preValue = nums[idx];
    }
    idx++;
  }
  if (cnt > maxLength) maxLength = cnt;
  return maxLength;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
console.log(longestConsecutive([0, 0]));
console.log(longestConsecutive([1, 2, 0, 1]));
