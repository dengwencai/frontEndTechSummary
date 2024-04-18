
plugin是贯穿于整个打包过程，用于干预编译的结果，比如打包优化，环境变量注入；
plugin本质是一个具有apply方法的class对象，


```jsx

const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

class ConsoleLogOnBuildWebpackPlugin {
  apply(compiler) {
    compiler.hooks.run.tap(pluginName, (compilation) => {
      console.log('webpack 构建过程开始！');
    });
  }
}

module.exports = ConsoleLogOnBuildWebpackPlugin;

```


 参考文档：https://www.yisu.com/zixun/693106.html
 https://juejin.cn/post/6988057258550624293