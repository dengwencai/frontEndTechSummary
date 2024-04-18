BFC 是 Block Formatting Context的缩写，即块级格式化上下文,BFC是CSS布局的一个概念，是一个独立的渲染区域，规定了内部box如何布局，并且这个区域的子元素不会影响到外面的元素

如何创建BFC？
1. overflow
2. position:absolute或者fixed
3. float
4. 根html
5. display的值为inline-block、table-cell、table-caption

BFC的使用场景
1. 清除浮动（让父元素的高度包含子浮动元素）
2. 同一BFC容器中的相邻元素间的外边距重叠问题


参考文档：https://zhuanlan.zhihu.com/p/25321647