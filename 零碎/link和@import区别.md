1. 加载顺序不一样，link读取到的时候就会加载，@import页面加载完毕加载
2. link可以设置属性rel=”preload”，来提前加载CSS文件，从而加快网页的加载速度
3. @import兼容性不好
4. 覆盖规则不同，link标签中的CSS样式可以被后面定义的CSS样式覆盖，而@import定义的CSS样式则不能被后面定义的CSS样式覆盖。