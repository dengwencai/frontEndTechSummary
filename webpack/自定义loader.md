loader本质是一个函数，它存在pitch和normal两个阶段，pitch阶段执行的顺序是从左到右，但是可以通过enforce属性设置loader的类型修改顺序，post，inline，normal，pre

normal阶段执行的顺序是从右到左，但是可以通过enforce修改顺序，pre，normal，inline，post

注意：pitch loader如果返回非undefined，那么会产生熔断效果，后面的loader不再执行，并且将return的值传入上一个loader的normal阶段

内联loader不是在配置阶段设置，是在引入模块阶段设置的，不同loader之间使用!链接，第一个loader前面可以增加符号来控制配置阶段的loader是否执行

<!-- 使用 ! 前缀，将禁用所有已配置的 normal loader(普通 loader) -->
import Styles from 'style-loader!css-loader?modules!./styles.css'

<!-- 使用 !! 前缀，将禁用所有已配置的 loader（preLoader, loader, postLoader） -->
import Styles from '!style-loader!css-loader?modules!./styles.css'

<!-- 使用 -! 前缀，将禁用所有已配置的 preLoader 和 loader，但是不禁用 postLoaders -->
import Styles from '!!style-loader!css-loader?modules!./styles.css'

加载自定义loader时，存在三种方法

1. 使用绝对路径
   
```
const path = require('path');
module.exports = {
  ...
  module: {
    rules: [
    {
        test: /.js$/,
        loader: path.resolve(__dirname, './my-loaders/babel-loader.js'),
    },
  ],}
} 
```

2. resolveLoader.alias

```
const path = require('path');
​
module.exports = {
  ...
  resolveLoader: {
    alias: {
      'babel-loader': path.resolve(__dirname, 'my-loaders/babel-loader.js'),
  },},
  module: {
    rules: [
    {
        test: /.js$/,
        loader: 'babel-loader.js',
    },
  ],}
} 

```

3. resolveLoader.modules

```
module.exports = {
  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'loaders')],
  },
};

```


参考文档：https://blog.csdn.net/qq_41581588/article/details/129177281
