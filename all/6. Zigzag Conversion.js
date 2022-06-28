/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  const strings = [];
  for (let i = 0; i < numRows; ++i) strings.push("");
  let down = true;
  let layer = 0;
  while (s.length > 0) {
    if (down || (layer !== 0 && layer !== numRows - 1)) {
      strings[layer] += s[0];
      s = s.slice(1);
    }
    if (down) {
      layer++;
      if (layer === numRows) {
        layer--;
        down = false;
      }
    } else {
      layer--;
      if (layer === -1) {
        layer++;
        down = true;
      }
    }
  }
  return strings.reduce((pre, cur) => pre + cur);
};

console.log(convert("PAYPALISHIRING", 4));
// PINALSIGYAHRPI
// PINALSIGYAHRPI
