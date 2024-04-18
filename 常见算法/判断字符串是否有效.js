// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串, 判断字符串是否有效

var isValid = function (s) {
  let strStack = [];
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (c === "(" || c == "[" || c == "{") {
      strStack.push(c);
    } else if (c === ")") {
      if (strStack[strStack.length - 1] !== "(") return false;
      strStack.pop();
    } else if (c === "]") {
      if (strStack[strStack.length - 1] !== "[") return false;
      strStack.pop();
    } else if (c === "}") {
      if (strStack[strStack.length - 1] !== "{") return false;
      strStack.pop();
    }
  }
  return strStack.length === 0;
};

// 参考文档：https://blog.csdn.net/weixin_38426554/article/details/98469713
