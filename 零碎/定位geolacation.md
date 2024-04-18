### 获取位置

```js
// code属性：
// 1 用户拒绝了位置服务
// 2 获取不到位置信息
// 3 获取信息超时

navigator.geolocation.getCurrentPosition(suc,err,{timeout:1000})

function suc(position){

}
function err(positionError){

}


```

### 位置发生变化

```js
const watchId = navigator.geolocation.watchPosition(function(position){
    
})

// 取消监听位置
navigator.geolocation.clearWatch(watchId);

```


<!-- 参考文档：https://blog.csdn.net/weixin_38039976/article/details/121762045 -->
<!-- https://zhuanlan.zhihu.com/p/84309280 -->