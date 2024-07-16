Array.prototype.mapTest = function (fn) {
    let res = [];
    this.forEach((element, index) => {
      const r = fn(element, index);
      res.push(r);
    });
    return res;
  };

  const arr = [1, 2];

 const resukt = arr.mapTest((item, index) => {
    return { a: item, b: index };
  });

  console.log("%c Line:22 🥟 resukt", "color:#7f2b82", resukt);