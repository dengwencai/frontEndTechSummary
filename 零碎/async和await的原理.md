### 在 JavaScript 中，通常会使用回调函数、Promise 或者 Generator 来处理这些异步操作

通过使用 Generator 函数，
我们可以实现暂停执行和恢复执行的功能。在 Generator 函数中，
我们可以使用 yield 关键字暂停函数的执行，并返回一个中间结果。下次调用 Generator 函数时，
会从上次暂停的位置继续执行，直到函数结束或者遇到下一个 yield 表达式。

async/await 的原理是基于 Generator 函数和 Promise 实现的。
当我们使用 async 关键字声明一个函数时，该函数会被转换成一个 Generator 函数,并返回一个 Promise 对象。
在 async 函数的内部，所有的 await 表达式都会被转换成 yield 表达式

参考文档：https://xie.infoq.cn/article/699e0f5c645e48413eab8fa4b