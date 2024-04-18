```js
// Promise.all()

let p1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log(1);
    resolve(1);
  }, 1000);
});

let p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(2);
    console.log(2);
  }, 1000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(3);
  }, 1000);
});

all([p1, p2, p3])
  .then((res) => {
    console.log("%c Line:27 🍐 res", "color:#7f2b82", res);
  })
  .catch((err) => {
    console.log("%c Line:29 🥐 err", "color:#ea7e5c", err);
  });

function all(arr) {
  let ans = [];
  return new Promise((resolve, reject) => {
    arr.forEach((a, i) => {
      a.then((res) => {
        ans[i] = res;
        if (ans.length === arr.length) {
          resolve(ans);
        }
      }).catch((err) => {
        reject(err);
      });
    });
  });
}

```
