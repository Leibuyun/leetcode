/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const negative = x < 0;
  x = x >= 0 ? x : -x;
  let ans = 0;
  while (x > 0) {
    ans = ans * 10 + (x % 10);
    x = parseInt(x / 10);
  }
  if (negative) ans = -ans;
  if (ans < -1 << 31 || ans > 2 * (1 << 30) - 1) ans = 0;
  return ans;
};
// 9646324351
reverse(3456);
reverse(-4321);
console.log(reverse(1534236469));
