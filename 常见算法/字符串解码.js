// 字符串解码

// [3, 2]
// ['a', 'bc']

function decodeString(str) {
  let numsStack = []; //存储数字的栈
  let strStack = []; //存储字符串的栈
  let tempStr = ""; //阶段性的字符串

  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    // 数字
    if (!isNaN(Number(c))) {
      numsStack.push(c);
    } else if (c == "[") {
      strStack.push(tempStr);
      tempStr = "";
    } else if (c == "]") {
      tempStr = strStack.pop() + tempStr.repeat(numsStack.pop());
    } else {
      // 字母
      tempStr = tempStr + c;
    }
  }
  console.log("%c Line:55 🌭 a", "color:#3f7cff", a);

  return tempStr;
}

let s = "2[3[a2[c2]]]";
let r = decodeString(s);
console.log("%c Line:39 🥓 r", "color:#93c0a4", r);

//   参考文档：https://leetcode.cn/problems/decode-string/description/
