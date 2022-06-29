const isDigit = (character) => "0123456789".includes(character);
// parseInt(character) >= 0 && parseInt(character) < 10;
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  s = s.trimStart();
  let ans = 0;
  let negative = false;
  if (s.length > 0) {
    if (s[0] === "-" || s[0] === "+") {
      if (s[0] === "-") negative = true;
      s = s.slice(1);
    }
  }
  let i = 0;
  while (i < s.length && isDigit(s[i])) {
    ans = ans * 10 + 1 * s[i];
    i++;
  }
  if (negative) ans = -ans;
  if (ans < -2147483648) ans = -2147483648;
  if (ans > 2147483647) ans = 2147483647;
  return ans;
};

console.log(myAtoi("   -q3q27682qwe"));
console.log(myAtoi("   32768"));
console.log(myAtoi("   -32768"));
console.log(myAtoi("4193 with words"));
