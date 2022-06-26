// region
// Time Complexity: O(n^2)
// Space Complexity: O(1)
// var twoSum = function (nums, target) {
// 	for (let i = 0; i < nums.length; ++i) {
// 		for (let j = i + 1; j < nums.length; ++j) {
// 			if (nums[i] + nums[j] === target) {
// 				return [i, j]
// 			}
// 		}
// 	}
// }
// endregion

// Time Complexity: O(n)
// Space Complexity: O(n)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; ++i) {
    if (map.has(target - nums[i])) {
      return [i, map.get(target - nums[i])];
    } else {
      map.set(nums[i], i);
    }
  }
  // let map = {}
  // for (let i = 0; i < nums.length; i++) {
  // 	if (map[target - nums[i]] !== undefined) {
  // 		return [i, map[target - nums[i]]]
  // 	} else {
  // 		map[nums[i]] = i
  // 	}
  // }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
