// 防抖
// 在规定时间内，防止频繁触发函数，如果再次触发，那么以最后的函数为准
function debounce(fn, delay) {
    let timeId;
    return function (...args) {
      // 利用settimeout来跟踪每次执行的任务，只有在执行的任务，就停止，执行最新任务
      clearTimeout(timeId)
      timeId = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
  }

  
// 节流
// todo 在一段时间内，只触发一次函数
// @params fn {Function} 触发的方法
// @param delay {Number} 规定的时间
// function throttle(fn, delay) {
//     // let timeId;
//     let latestTime = 0;//记录函数的执行最新时间
//     return function(...args) {
//         const now = (new Date()).getTime();
//         if(now - latestTime >= delay){
//             fn.apply(this, args);
//             latestTime = now;
//         }else{
//             // 如果在规定时间内再次触发，那么约定，在规定时间之后，再次触发此函数
//             // clearTimeout(timeId);
//             // timeId = setTimeout(()=>{
//             //     fn.apply(this, args);
//             //     latestTime = now;
//             // },delay)
//         }
//     }
// }

function throttle(fn, delay) {
    let timer;
    return function () {
      if(!timer){
          timer = setTimeout(()=>{
              fn.apply(this, args);
              timer = null;
          },delay);
      }
    };
  }