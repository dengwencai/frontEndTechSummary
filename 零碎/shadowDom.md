
shadow Dom是HTML的一个规范，它允许开发封装自己的HTML标签，CSS样式，特定的js代码

总结：其实就是类似dom，但是里面的样式隔离，不影响常规dom，通常挂载在常规dom下面，
被挂载的常规dom称为Shadow host，
shadow dom里面的根dom叫做Shadow root，
Shadow DOM内部的DOM树叫做Shadow tree

可使用 Element.attachShadow() 方法给指定的元素挂载一个Shadow DOM，并且返回对 ShadowRoot 的引用。
eg:

let hostEle = document.getElementById("myCard");
let shadowroot = hostEle.attachShadow({mode: "open"});

参考文档：https://zhuanlan.zhihu.com/p/465930819
