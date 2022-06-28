/**
 * @param {string} s
 * @return {string}
 */
// 可以利用dp进行优化、判断是否是回文, dp[i][j] (s[i] === s[j] && dp[i + 1][j - 1])
const isPalindrome = (s) => {
  for (let i = 0; i < parseInt(s.length / 2); ++i)
    if (s[i] !== s[s.length - i - 1]) return false;
  return true;
};

var longestPalindrome = function (s) {
  for (let l = s.length; l > 1; --l) {
    for (let start = 0, end = start + l; end <= s.length; ++start, ++end) {
      const str = s.slice(start, end);
      if (isPalindrome(str)) {
        return str;
      }
    }
  }
  return s[0];
};

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(
  longestPalindrome(
    "zudfweormatjycujjirzjpyrmaxurectxrtqedmmgergwdvjmjtstdhcihacqnothgttgqfywcpgnuvwglvfiuxteopoyizgehkwuvvkqxbnufkcbodlhdmbqyghkojrgokpwdhtdrwmvdegwycecrgjvuexlguayzcammupgeskrvpthrmwqaqsdcgycdupykppiyhwzwcplivjnnvwhqkkxildtyjltklcokcrgqnnwzzeuqioyahqpuskkpbxhvzvqyhlegmoviogzwuiqahiouhnecjwysmtarjjdjqdrkljawzasriouuiqkcwwqsxifbndjmyprdozhwaoibpqrthpcjphgsfbeqrqqoqiqqdicvybzxhklehzzapbvcyleljawowluqgxxwlrymzojshlwkmzwpixgfjljkmwdtjeabgyrpbqyyykmoaqdambpkyyvukalbrzoyoufjqeftniddsfqnilxlplselqatdgjziphvrbokofvuerpsvqmzakbyzxtxvyanvjpfyvyiivqusfrsufjanmfibgrkwtiuoykiavpbqeyfsuteuxxjiyxvlvgmehycdvxdorpepmsinvmyzeqeiikajopqedyopirmhymozernxzaueljjrhcsofwyddkpnvcvzixdjknikyhzmstvbducjcoyoeoaqruuewclzqqqxzpgykrkygxnmlsrjudoaejxkipkgmcoqtxhelvsizgdwdyjwuumazxfstoaxeqqxoqezakdqjwpkrbldpcbbxexquqrznavcrprnydufsidakvrpuzgfisdxreldbqfizngtrilnbqboxwmwienlkmmiuifrvytukcqcpeqdwwucymgvyrektsnfijdcdoawbcwkkjkqwzffnuqituihjaklvthulmcjrhqcyzvekzqlxgddjoir"
  )
);
