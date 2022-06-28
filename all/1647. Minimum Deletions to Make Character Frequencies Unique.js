/**
 * @param {string} s
 * @return {number}
 */

const fun = (s, val) => {
  let flag = false;
  if (!s.has(val)) flag = true;
  s.add(val);
  return flag;
};
var minDeletions = function (s) {
  let ans = 0;
  const map1 = new Map();
  for (let c of s) map1.set(c, map1.get(c) === undefined ? 1 : map1.get(c) + 1);
  const lst = [...map1.values()].sort();
  const set1 = new Set();
  for (let value of lst) {
    while (value !== 0 && !fun(set1, value)) {
      value--;
      ans++;
    }
  }
  // const map2 = new Map();
  // for (let item of map1.values()) {
  //   map2.set(item, map2.get(item) === undefined ? 1 : map2.get(item) + 1);
  // }
  // const lst = [...map2.entries()].sort((o1, o2) => o2[0] - o1[0]);
  // while (lst.length > 0) {
  //   const lst_first = lst.shift();
  //   if (lst_first[1] !== 1 && lst_first[0] !== 0) {
  //     ans += lst_first[1] - 1;
  //     // 判断是否需要合并
  //     const lst_second = lst.shift();
  //     if (lst_second === undefined || lst_first[0] - 1 !== lst_second[0]) {
  //       if (lst_second !== undefined) lst.unshift(lst_second);
  //       lst.unshift([lst_first[0] - 1, lst_first[1] - 1]);
  //     } else {
  //       lst.unshift([lst_second[0], lst_second[1] + lst_first[1] - 1]);
  //     }
  //   }
  // }
  return ans;
};
// 1 3
// 0 2
// [1, 2, 2, 3, 4, 5, 5, 5, 6]
// "bbcebab"
// 2: 3
// 1: 2
// b 4    4: 1
// a 1    1: 3
// c 1
// e 1
console.log(minDeletions("aab"));
console.log(minDeletions("aaabbbcc"));
console.log(minDeletions("ceabaacb"));
console.log(minDeletions("bbcebab"));
console.log(minDeletions("abcabc"));
