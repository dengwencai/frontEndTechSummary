// vue双向绑定原理
// vue数据双向绑定是通过数据劫持和发布-订阅者模式方式来实现的

// 实现一个事件中心dep，存所有的订阅者，遍历所有属性，在Object.defineProperty()中的get方法注册事件，在set方法中发布事件，
// 然后在订阅者中就可以去做更新视图操作


// 参考文档：https://www.php.cn/faq/474066.html


// 1. vue双向绑定原理，是通过观察者模式和数据劫持来做的
// 2. vue2.0数据劫持是用Object.defineProperty来实现的，3.0改成proxy
// 3. 遍历所有data里面的属性使用数据劫持转化为setter和getter方法，setter能监听修改值的操作，getter能监听获取值的操作
// 4. 同时编译过程中会有一个compile方法专门解析template模版中的节点的指令，并且一个指令添加一个订阅器，订阅器中含有更新视图的操作
// 5. 因为订阅器很多，实现了一个dep类来单独存储订阅器，每当数据变化的时候，通知订阅器更新视图

// 参考文档：https://www.jb51.net/article/283465.htm


