// 1. Promise.any
// 接收一个Promise数组，数组中如有非Promise项，则此项当做成功
// 如果有一个Promise成功，则返回这个成功结果
// 如果所有Promise都失败，则报错

// 当有成功的时候，返回最快那个成功
// function fn(time, isResolve) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         isResolve ? resolve(`${time}毫秒后我成功啦！！！`) : reject(`${time}毫秒后我失败啦！！！`)
//       }, time)
//     })
//   }
  
//   Promise.any([fn(2000, true), fn(3000), fn(1000, true)]).then(res => {
//     console.log(res) // 1秒后 输出  1000毫秒后我成功啦
//   }, err => {
//     console.log(err)
//   })
  
//   // 当全都失败时
//   function fn(time, isResolve) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         isResolve ? resolve(`${time}毫秒后我成功啦！！！`) : reject(`${time}毫秒后我失败啦！！！`)
//       }, time)
//     })
//   }
  
//   Promise.any([fn(2000), fn(3000), fn(1000)]).then(res => {
//     console.log(res)
//   }, err => {
//     console.log(err) // 3秒后 报错 all Error
//   })

// 2. 数字分隔符
// const num = 1_000 * 2
// console.log("%c Line:38 🎂 num", "color:#3f7cff", num);

// 3. ||= 和 &&=
// 或等于(||=)   a ||= b 等同于 a || (a = b);
// 且等于(&&=)   a &&= b 等同于 a && (a = b);

let a = true
let b = '2'

let c = a &&=b
console.log("%c Line:48 🍣 c", "color:#3f7cff", c);

// !!!参考文档：https://blog.csdn.net/weixin_38664300/article/details/125332006