n+：匹配任何包含至少一个 n 的字符串
n*：匹配任何包含零个或多个 n 的字符串
n？：匹配任何包含零个或一个 n 的字符串

参考文档：https://c.biancheng.net/view/5632.html

### 声明正则方式
const rex = /\d+/g;
const rex1 = new RegExp('\\d+','gim')

const str = '2018年下了一场大雪2019不知到'
const r = str.match(rex1)
console.log("%c Line:14 🍢 r", "color:#f5ce50", r);

### 正则使用
replace：str.replace(rex,function(){})
match：const result = str.match(rex)
exec：const result = rex.exec(str)

正则括号(),[],{}含义：
小括号(), 表示一个子表达式
中括号[]: 匹配 单个字符 是否属于中括号中的一个字符,
大括号{}, 用于重复次数, 大括号左边表达式的匹配次数


参考文档：https://blog.csdn.net/evehaoeve/article/details/119062747