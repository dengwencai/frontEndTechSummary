// 1. for await of

// function fn(time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`${time}毫秒后我成功啦！！！`);
//     }, time);
//   });
// }

// // fn(3000).then((res) => console.log(res));
// // fn(1000).then((res) => console.log(res));
// // fn(2000).then((res) => console.log(res));


// async function asyncFn () {
//     const arr = [fn(3000), fn(1000), fn(1000), fn(2000), fn(500)]
//     for await (let x of arr) {
//       console.log(x)
//     }
//   }
  
//   asyncFn()


// 2. Promise.finally

// !!!参考文档：https://blog.csdn.net/weixin_38664300/article/details/125332006
