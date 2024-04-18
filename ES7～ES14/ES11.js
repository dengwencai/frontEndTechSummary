// 1. Promise.allSettled
// 接收一个Promise数组，数组中如有非Promise项，则此项当做成功
// 把每一个Promise的结果，集合成数组，返回

// function fn(time, isResolve=false) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         isResolve ? resolve(`${time}毫秒后我成功啦！！！`) : reject(`${time}毫秒后我失败啦！！！`)
//       }, time)
//     })
//   }
  
//   Promise.allSettled([fn(1000, true), fn(3000), fn(10000)]).then(res => {
//     console.log(res)
//     // 3秒后输出 
//     [
//     { status: 'fulfilled', value: '2000毫秒后我成功啦！！！' },
//     { status: 'rejected', reason: '3000毫秒后我失败啦！！！' },
//     { status: 'rejected', reason: '1000毫秒后我失败啦！！！' }
//   ]
//   }).catch((e)=>{
//     console.log("%c Line:20 🥚 e", "color:#6ec1c2", e);
//   })

// 2. ?. 和 ??
// 在??这，只有undefined和null才算假值

// !!!参考文档：https://blog.csdn.net/weixin_38664300/article/details/125332006
// 参考文档: https://juejin.cn/post/6995334897065787422