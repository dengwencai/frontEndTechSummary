
### fetch和axios区别


fetch和axios都是用于发起http请求的工具，但是两者之间有一些区别。


#### fetch

fetch优点：原生底层支持

fetch缺点：

1. fetch只对网络请求报错，对400，500都当作成功的请求，服务器返回 400，500 错误码时并不会 reject，只有网络错误这些导致请求不能完成时，fetch 才会被 reject。
2. fetch默认不会带cookie，需要添加配置项： fetch(url, {credentials: 'include'})
3. fetch不支持abort，不支持超时控制，使用setTimeout及Promise.reject的实现的超时控制并不能阻止请求过程继续在后台运行，造成了流量的浪费
4. fetch没有办法原生监测请求的进度，而XHR可以
5. fetch 携带的参数如果是 json 对象需要转换为 json 字符串，axios 可以直接传对象

node-fetch用于服务器端，即只能在nodejs中用
whatwg-fetch用于客户端,即用于在浏览器没有原生支持fetch的情况
isomorphic-fetch可以在nodejs和浏览器两种环境中运行，是对whatwg-fetch的包装。

#### axios

axios优点：

1. 从浏览器中创建 XMLHttpRequest，基于浏览器的 xhr
2. 可以拦截请求和响应
3. 可以转换请求和响应数据
4. 可以取消请求
5. 可以自动转换 JSON 数据
6. 客户端支持防止 CSRF/XSRF
7. xhr 自带请求取消、错误等方法，所以服务器返回 4xx 或 5xx 时，axios 会抛出错误，并取消请求


csrf/xsrf 防御机制：

服务器生成一个唯一的CSRF令牌，并将其存储在会话中，同时将其发送给客户端。客户端需在后续的请求中携带这个令牌。服务器接收请求时会检查令牌的有效性。


```js

instance.interceptors.request.use(config => {
  // 从cookie或者本地存储中获取CSRF令牌
  const csrfToken = getCSRFToken();
  if (csrfToken) {
    // 如果存在CSRF令牌，将其添加到请求头中
    config.headers['X-CSRF-Token'] = csrfToken;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

```

后续请求会自动携带CSRF令牌，服务器会检查令牌的有效性。

