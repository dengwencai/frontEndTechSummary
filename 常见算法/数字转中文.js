const str = "2018年结束了，2019年开始了，2020年就也不远了";
const rex = /\d+/g; // 这里是定义匹配规则，匹配字符串里的1到多个数字
const str1 = str.replace(rex, "****");
console.log(str1); // 输出："****年结束了，****年开始了,****年也不远了"
const str2 = str.replace(rex, function (item) {
  console.log("%c Line:6 🍖 item", "color:#ea7e5c", item);
  const arr = [
    "零",
    "壹",
    "贰",
    "叁",
    "肆",
    "伍",
    "陆",
    "柒",
    "捌",
    "玖",
  ];
  return item.split("").reduce((total, item, index)=>{
    return total.concat(arr[item])
  },'')
});

console.log(str2); // 输出：贰零壹捌年结束了，贰零壹玖年开始了,贰零贰零年也不远了