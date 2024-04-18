
### hooks闭包

闭包产生的原因是useEffect等hook里面用到了某个state，但是没有添加到deps数组中，导致hook传入的函数只执行了一次，里面取的还是老的state

参考文档：https://zhuanlan.zhihu.com/p/509036942