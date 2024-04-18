// function asyncPool(poolLimit, array, iteratorFn) {
//     let i = 0;
//     const ret = []; //ret 保存返回结果，其顺序要与输入顺序一致
//     const executing = [];//executing 用于记录当前正在执行的请求。

//     const enqueue = function() {
//       if (i === array.length) {
//         return Promise.resolve();
//       }
//       const item = array[i++];
//       const p = Promise.resolve().then(() => iteratorFn(item, array));
//       ret.push(p);
  
//       let r = Promise.resolve();
  
//       // 当poolLimit值小于或等于总任务个数时，进行并发控制
//       if (poolLimit <= array.length) {
//         // 当任务完成后，从正在执行的任务数组中移除已完成的任务
//         const e = p.then(() => executing.splice(executing.indexOf(e), 1));
//         executing.push(e);
//         if (executing.length >= poolLimit) {
//           r = Promise.race(executing);
//         }
//       }
  
//       return r.then(() => enqueue());
//     };

//     return enqueue().then(() => Promise.all(ret));
//   }

// async function afetch(index) {
//     return new Promise(resolve=>{
//       setTimeout(()=>{
//         resolve(index);
//       },3000)
//     })
//   }

// const sendRequests = (reqs, max, callback = () => { }) => {
//     let waitList = [];
//     let currentNum = 0;
//     let NumReqDone = 0;
//     const results = new Array(reqs.length).fill(false);
  
//     const init = () => {
//       reqs.forEach((element, index) => {
//         request(index, element);
//       });
//     }
  
//     const request = async (index, reqUrl) => {
//       if (currentNum >= max) {
//         await new Promise(resolve => waitList.push(resolve))
//       }
//       reqHandler(index, reqUrl);
//     }
  
//     const reqHandler = async (index, reqUrl) => {
//       currentNum++;
//       try {
//         const result = await afetch(reqUrl);
//         results[index] = result;
//       } catch (err) {
//         results[index] = err;
//       } finally {
//         currentNum--;
//         NumReqDone++;
//         if (waitList.length) {
//           waitList[0]();
//           waitList.shift();
//         }
//         if (NumReqDone === max) {
//           callback(results);
//         }
//       }
//     }

//     init()

//   }
//   const allRequest = [
//     "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?index=1",
//     "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?index=2",
//     "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?index=3"
//   ];
//   sendRequests(allRequest, 1, (res) => console.log(res))

async function afetch(index) {
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve(index);
    },1000)
  })
}

// 并发请求函数
function func(urls, maxNum) {
  return new Promise((resolve) => {
    if (urls.length === 0) {
      resolve([]);
      return;
    }
    const results = [];
    let next = 0; // 下一个请求的下标
    let finishedNum = 0; // 当前请求完成的数量

    // 发送请求
    async function request() {
      if (next === urls.length) return;
      const i = next; // 保存序号，使result和urls相对应
      const url = urls[next]; //url只能在try外面获取，await fetch(urls[next])的方式会带来bug
      next++;
      try {
        const res = await afetch(i, url);
        // res 加入到results
        results[i] = res;
      } catch (err) {
        // err 加入到results
        results[i] = err;
      } finally {
        finishedNum++;
        // 判断是否所有的请求都已完成
        if (finishedNum === urls.length) {
          resolve(results);
        }
        request(); //递归调用
      }
    }

    // maxNum和urls.length取最小进行调用
    const num = Math.min(maxNum, urls.length);
    // 每次发起num数量的请求
    for (let i = 0; i < num; i++) {
      request();
    }
  });
}

// 测试代码如下：
function begin() {
  const urls = [];
  for (let i = 0; i <= 20; i++) {
    urls.push(`https://jsonplaceholder.typicode.com/todos/${i}`);
  }
  func(urls, 3).then((res) => {
    console.log("请求结果：", res);
  });
}

begin()