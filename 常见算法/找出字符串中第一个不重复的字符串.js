const str = 'abcddcbatmnnmdfabc';

function findNoReapetChar(str) {
    if (str === null || str === "") return null;
    if (str.length === 1) return str;
    const len = str.length;
    for(let i = 0; i < len; i++) {
        const c = str[i];
        // 两个判断条件：
        // 1. 该字符是第一个出现的字符
        // 2. 该字符在后边不会再次出现
        if (str.indexOf(c) == i && str.indexOf(c, i+1) === -1) {
            return c;
        }
    }
    return null
}
const result = findNoReapetChar(str);
console.log("%c Line:18 🍯 result", "color:#3f7cff", result);


// !!!参考文档：https://juejin.cn/post/6955059350218440740
