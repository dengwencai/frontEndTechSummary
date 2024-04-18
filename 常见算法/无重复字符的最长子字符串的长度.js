/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let res = []
    let max = 0
    for (let str of s) {
      while (res.includes(str)) {
        res.shift()
      }
      res.push(str)
      max = Math.max(max,res.length)
    }
    return max
  };

  const str = 'abcddsfds'
  // abcdd
  const len = lengthOfLongestSubstring(str)
  console.log("%c Line:23 🥪 len", "color:#ffdd4d", len);


  // 参考文档：https://leetcode.cn/problems/longest-substring-without-repeating-characters/?envType=study-plan-v2&envId=top-100-liked