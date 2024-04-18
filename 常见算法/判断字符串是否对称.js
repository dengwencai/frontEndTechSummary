// 判断字符串是否对称

function isPalindrome(str) {
  str = str.replace(/ /g, "").toLowerCase();
  let left = 0,
    right = str.length - 1;
  while (left <= right) {
    if (str[left] != str[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
}

function isPalindrome1(str) {
  // 去除空格并转换成小写字母
  str = str.replace(/ /g, "").toLowerCase();

  function helper(left, right) {
    if (right <= left) return true;

    if (str[left] !== str[right]) {
      return false;
    } else {
      return helper(left + 1, right - 1);
    }
  }

  return helper(0, str.length - 1);
}

console.log(isPalindrome("abcba")); // true
console.log(isPalindrome("hello")); // false
