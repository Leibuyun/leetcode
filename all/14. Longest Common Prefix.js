/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const minLength = Math.min(...strs.map((x) => x.length));
  let str = "";
  for (let i = 0; i < minLength; ++i) {
    let tmpStr = str + strs[0][i];
    if (strs.filter((s) => s.startsWith(tmpStr)).length === strs.length)
      str = tmpStr;
    else break;
  }
  return str;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["a"]));
