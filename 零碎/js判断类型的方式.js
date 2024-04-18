
// js判断类型有几种方式
// 1. typeof 只能判断基础数据类型，无法区分null，object，array
// 2. constructor //null,undefined没有constructor, 原型链上可以修改
// 3. instanceof //只能判断引用类型，并且只能确认存在关系，不一定是父子关系
// 4. Object.prototype.toString.apply() //任何数据

// 参考文档：https://www.cnblogs.com/bingcola/p/16499177.html