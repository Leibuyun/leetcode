const dict = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let ans = 0;
  for (let i = 0; i < s.length; ++i) {
    let flag = false;
    if (i + 1 < s.length) {
      if (
        (s[i] === "I" && (s[i + 1] === "V" || s[i + 1] === "X")) ||
        (s[i] === "X" && (s[i + 1] === "L" || s[i + 1] === "C")) ||
        (s[i] === "C" && (s[i + 1] === "D" || s[i + 1] === "M"))
      )
        flag = true;
    }
    if (flag) {
      ans += dict[s[i] + s[i + 1]];
      i++;
    } else ans += dict[s[i]];
  }
  return ans;
};
const s = "MCMXCIV";
console.log(romanToInt(s));
console.log(romanToInt("LVIII"));
console.log(romanToInt("III"));
