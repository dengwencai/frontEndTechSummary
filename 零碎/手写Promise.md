
### 手写Promise

```js

  class NPromise {
        constructor(executor) {
          this.state = "pending";
          this.val = null;
          this.reason = null;

          const resolve =  (value)=> {
            if(this.state !== 'pending') return
            this.val = value;
            this.state = "fullfilled";
          };

          const reject =  (reason)=> {
            if(this.state !== 'pending') return
            this.reason = reason;
            this.state = "rejected";
          };

          try {
            executor(resolve, reject)
          } catch (error) {
            reject(error);
          }
        }

        then(su, fail) {
          if (this.state === "fullfilled") {
            su(this.val);
          }
          if (this.state === "rejected") {
            fail(this.reason);
          }
        }
      }

      new NPromise((resolve, reject) => {
        resolve(1);
      })
        .then(
          (res) => {
            console.log("%c Line:42 🌮 res", "color:#6ec1c2", res);
          },
          (err) => {
            console.log("%c Line:45 🍖 err", "color:#465975", err);
          }
        )
        // .catch((err) => {
        //   console.log("%c Line:48 🍩 err", "color:#ed9ec7", err);
        // })
        // .finally((e) => {});

```

<!-- 参考文档：https://zhuanlan.zhihu.com/p/431677536 -->