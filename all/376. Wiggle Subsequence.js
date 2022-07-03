/**
 * @param {number[]} nums
 * @return {number}
 */
// 1 6
var wiggleMaxLength = function (nums) {
  let positive;
  for (let i = 1; i < nums.length; ++i) {
    if (
      nums[i] - nums[i - 1] === 0 ||
      (positive !== undefined && nums[i] - nums[i - 1] > 0 === positive)
    ) {
      nums.splice(i - 1, 1);
      i--;
    } else {
      if (positive === undefined) positive = nums[i] - nums[i - 1] < 0;
      positive = !positive;
    }
  }
  return nums.length;
};

console.log(wiggleMaxLength([1, 7, 4, 9, 2, 5]));
console.log(wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8]));
console.log(wiggleMaxLength([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(wiggleMaxLength([0, 0]));
console.log(wiggleMaxLength([0, 0, 0]));
console.log(wiggleMaxLength([0]));
console.log(wiggleMaxLength([1, 1, 7, 4, 9, 2, 5]));

/**
 * public class Solution {
    public int wiggleMaxLength(int[] nums) {

        if( nums.length == 0 ) return 0;

        int[] up = new int[nums.length];
        int[] down = new int[nums.length];

        up[0] = 1;
        down[0] = 1;

        for(int i = 1 ; i < nums.length; i++){
            if( nums[i] > nums[i-1] ){
                up[i] = down[i-1]+1;
                down[i] = down[i-1];
            }else if( nums[i] < nums[i-1]){
                down[i] = up[i-1]+1;
                up[i] = up[i-1];
            }else{
                down[i] = down[i-1];
                up[i] = up[i-1];
            }
        }

        return Math.max(down[nums.length-1],up[nums.length-1]);
    }
}
 *
 */
