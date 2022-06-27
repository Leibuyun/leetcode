/**
 * @param {string} n
 * @return {number}
 */
/**
 * 82734
 * 11111 = 71623
 * 11111 = 60512
 * 10111 = 50401
 * 10101 = 40300
 * 10100 = 30200
 * 10100 = 20100
 * 10100 = 10000
 * 10000
 */
var minPartitions = function (n) {
  return Math.max(...n.split("").map((x) => Number(x)));
};

const str = "12345";
console.log(minPartitions(str));
