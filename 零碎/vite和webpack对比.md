### vite优势

1. 快速启动，vite启动时不会打包整个项目的代码，只会启动一个静态页面服务器，当客户端请求时，根据不同请求，按需加载不同模块
2. 热更新快，当某个模块发生变化时，重新请求该模块，而不是重新编译整个模块和其依赖
3. 打包速度快，生产环境基于rollup，打包更快，体积更小
4. vite基于esm，浏览器本身支持，webpack需要经过高版本代码转化为低版本代码

参考文档：https://answer.baidu.com/answer/land?params=EVn%2B8Jcot0W4caT56ksVS1zOANA1qxW0gk3byM%2FnCCxK8O1wWEYJasu3QotaZlQ4fDXhzLz3%2BUThJtgAMZwusXhq%2FH67Gj%2BF0HIeHnBVptrP8o7pa3m7suVLmrRHH8kQyejMOkAOXZxl2eGt1%2B00AeywUseq8w5zcUDDbTgO2Jc%3D&from=dqa&lid=a9b97809000af780&word=vite%E7%9A%84%E4%BC%98%E5%8A%BF