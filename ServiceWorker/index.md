### service worker

Service Worker是一种独立于主线程之外的js线程，它脱离浏览器窗体因此无法访问dom，可以用来实现离线缓存，消息推送和网络代理的功能，借助service worker实现的离线缓存称为Service Worker Cache

Service Worker 的生命周期包括 install、active、working 三个阶段。一旦 Service Worker 被 install，它将始终存在，只会在 active 与 working 之间切换，除非我们主动终止它

注意：只能支持https

参考文档：https://zhuanlan.zhihu.com/p/162870243