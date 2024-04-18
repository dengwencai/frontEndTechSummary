   // 基于jquery定义一个sdk
    (function(root,fn){
      // 当前处于nodejs环境，使用commonjs规范
      if(typeof exports){
        const $ = require('jquery');
        module.exports = fn($)
        // 当前处于浏览器requirejs环境，使用AMD规范
      }else if(typeof define){
        define(['jquery'],fn)
      }else{
        root.testModule = fn(root.jQuery)
      }
    })(this,function($){

    })

CommonJS：开始于服务器端的模块化，同步定义的模块化，每个模块都是一个单独的作用域，模块输出，modules.exports，模块加载 require()引入模块。

AMD (Asynchronous Module Definition) 规范通过define方法去定义模块，通过require方法去加载模块。

CMD规范在2011年由seaJS提出，CMD规范和AMD规范类似，主要区别是CMD规范是就近加载依赖，延迟执行，只有到require时依赖才执行。

UMD（Universal Module Definition - 通用模块定义）
UMD是AMD和CommonJS的一个糅合。AMD是浏览器优先，异步加载；CommonJS是服务器优先，同步加载。
既然要通用，怎么办呢？那就先判断是否支持node.js的模块，存在就使用node.js；再判断是否支持AMD（define是否存在），存在则使用AMD的方式加载。这就是所谓的UMD

参考文档：https://zhuanlan.zhihu.com/p/467991875