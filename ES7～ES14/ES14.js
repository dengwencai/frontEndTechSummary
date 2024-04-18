// 1. WeakMap 支持 Symbol 作为 key

// 2. js支持Hashbang 语法

// 3. Array扩展
// 3.1 toSorted
// sort方法的复制版本，区别就是sort是修改原数组，而toSorted是返回新数组

// 3.2 toReversed
// reverse方法的复制版本，区别就是reverse是修改原数组，而toReversed是返回新数组

// 3.3 toSpliced
// toSpliced与splice区别就很大了。splice是截取原数组的数据，并返回截取出来的数据。
// toSpliced是对原数组的副本进行操作，然后返回被截取完后的新数组，并不会修改原数组。

// 3.4 with
// with有点类似我们通过[index]来修改数组，区别就是with不是修改原数组，而是返回整个新数组。
// const arr = [1, 3, 5, 2, 8];

// // 第一个参数下标，第二个是被改成的值
// const newArr = arr.with(1, 10);
// console.log("原数组:", arr);
// console.log("新数组:", newArr);

// 3.5 findLast / findLastIndex

// !!!参考文档：https://blog.csdn.net/weixin_38664300/article/details/125332006
// 参考文档: https://juejin.cn/post/6995334897065787422
