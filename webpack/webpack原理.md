#### 原理

1. webpack是常见的打包工具，它一般设定一个入口文件，会把相关的依赖打包成一个js文件，通常webpack只识别js文件，所以会用到一些loader来处理此类文件，比如less-loader，css-loader，可能会用到一些插件plugin，来拓展功能，比如压缩文件，塞入全局变量等

#### loader和plugin作用
loader是文件转换器，将webpack不能处理的模块转换为webpack能处理的模块，就是js模块
plugin是功能扩展，干预webpack的打包过程，修改编译结果或打包结果


webpack优化：https://juejin.cn/post/7083519723484708878

webpack常用插件：https://blog.51cto.com/u_15809510/5968219