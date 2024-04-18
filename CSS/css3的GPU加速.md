如下几个css属性可以触发硬件加速：

1. transform（ translate3d、translateZ(0)，scale3d等）
2. opacity
3. filter（滤镜：drop-shadow()、opacity()
4. will-change

正常渲染过程是由渲染线程进行渲染，但是使用GPU加速后，将启用GPU处理，不会触发重绘，animation与transition更加顺畅。

参考文档：

https://blog.csdn.net/weixin_44786530/article/details/130809386

https://www.jianshu.com/p/ec9b8909f9bb