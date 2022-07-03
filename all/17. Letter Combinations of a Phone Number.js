/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  const dict = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  let res = [""];
  for (let digit of digits) {
    let tRes = [];
    for (let item of res) {
      for (let char of dict[parseInt(digit)]) tRes.push(item + char);
    }
    res = tRes;
  }
  return res;
};

console.log(letterCombinations("23"));
console.log(letterCombinations(""));
