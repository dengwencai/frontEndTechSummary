# history

基于history api来实现的，跳转的方法有
history.go()
history.forward()
history.backward()
history.pushState() // 该方法用于在历史中添加一条记录。pushState()方法不会触发页面刷新，只是导致 History 对象发生变化，地址栏会有变化。
history.replaceState() // 该方法用来修改 History 对象的当前记录，用法与 pushState() 方法一样。

监听方法

```javascript
// 每当 history 对象出现变化时，就会触发 popstate 事件。

window.addEventListener('popstate', function(e){
    //e.state 相当于 history.state
    console.log('state: ' + JSON.stringify(e.state));
    console.log(history.state);
})

```


# hash

通过改变url后面#部分内容来实现

```javascript

//监听hash变化，点击浏览器的前进后退会触发
window.addEventListener('hashchange', function(){

})

```


<!-- 参考文档：https://juejin.cn/post/7236563012533878821 -->