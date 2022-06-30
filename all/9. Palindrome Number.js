/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  let ans = 0,
    initX = x;
  while (x !== 0) {
    ans = ans * 10 + (x % 10);
    x = parseInt(x / 10);
  }
  return ans === initX;
};

console.log(isPalindrome(1211));
