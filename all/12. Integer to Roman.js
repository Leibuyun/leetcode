/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let ans = "";
  while (num > 0) {
    if (num >= 1000) {
      let cnt = parseInt(num / 1000);
      ans += "M".repeat(cnt);
      num %= 1000;
    } else if (num >= 900) {
      ans += "CM";
      num -= 900;
    } else if (num >= 500) {
      ans += "D";
      num -= 500;
    } else if (num >= 400) {
      ans += "CD";
      num -= 400;
    } else if (num >= 100) {
      ans += "C";
      num -= 100;
    } else if (num >= 90) {
      ans += "XC";
      num -= 90;
    } else if (num >= 50) {
      ans += "L";
      num -= 50;
    } else if (num >= 40) {
      ans += "XL";
      num -= 40;
    } else if (num >= 10) {
      ans += "X";
      num -= 10;
    } else if (num >= 9) {
      ans += "IX";
      num -= 9;
    } else if (num >= 5) {
      ans += "V";
      num -= 5;
    } else if (num >= 4) {
      ans += "IV";
      num -= 4;
    } else {
      ans += "I";
      num--;
    }
  }
  return ans;
};

console.log(intToRoman(1994));

/**
 *
 * public static String intToRoman(int num) {
    String M[] = {"", "M", "MM", "MMM"};
    String C[] = {"", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"};
    String X[] = {"", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"};
    String I[] = {"", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"};
    return M[num/1000] + C[(num%1000)/100] + X[(num%100)/10] + I[num%10];
}
 */
