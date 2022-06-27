/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const map = new Map();
  let ans = 0;
  let cur = 0;
  let start = 0;
  for (let i = 0; i < s.length; ++i) {
    if (map.has(s[i])) {
      if (cur > ans) ans = cur;
      if (start <= map.get(s[i])) {
        cur = i - map.get(s[i]);
        start = map.get(s[i]) + 1;
      } else {
        cur = i - start + 1;
      }
    } else {
      cur++;
    }
    map.set(s[i], i);
  }
  if (cur > ans) ans = cur;
  return ans;
};

// 1 1 3 5 6
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring(" "));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("tmmzuxt"));
console.log(lengthOfLongestSubstring("wobgrovw"));
