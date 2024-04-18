微前端是可以将多个web应用聚合在一起，提供统一的访问入口
qiankun框架的源代码以及实现原理，
框架简单而言就是创建的一个简单的html+js项目，然后利用爬虫读取对应地址的文件，再挂载到自己html指定的dom结点上展示

qiankun使用的是Html Entry,主要步骤如下：首先通过url获取整个Html文件，从html中解析出html，js，css，在主应用中创建容器，
把html更新到容器中，然后动态创建style和script标签，把子应用的css和js赋值其中，最后把容器置在主应用


参考文档：https://zhuanlan.zhihu.com/p/492152857?utm_medium=referral&utm_id=0


qiankun.js js隔离机制

1. snapshot沙箱
2. legacy沙箱
3. proxy沙箱，子应用中js执行的时候，是一个自执行函数，proxy通过参数的形式传入，所有的window操作，都是对proxy操作，实现js隔离
   
   <!-- 参考文档：https://blog.csdn.net/weixin_38954787/article/details/132070484 -->

css隔离

1. 唯一标识
2. scoped
3. shadow dom



