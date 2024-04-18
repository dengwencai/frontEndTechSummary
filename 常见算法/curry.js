// 函数柯里化
// todo 一个函数存在多个参数时，拆分成单个参数的函数
// 备注：函数的长度就是形参的个数

// 思路：函数接受一个函数fn，然后返回一个柯里化的函数，点那个柯里化后的函数被调用时，
// 它将检查传入的参数数量是否足够执行原函数，如果参数足够
// 那么直接调用原函数fn，如果参数不够，它将返回一个新函数，等待更多参数传入，并持续追加参数直到参数足够

function curry(fn) {
  return function curried (...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...moreArgs) {
        return curried(...args.concat(moreArgs));
      };
    }
  };
}

function getParams(name, age) {
    const str = `${name}: ${age}`
  return str;
}

const curryFn = curry(getParams);

curryFn("小明")(20);
