
### 浏览器从输入url开始发生了什么
1. DNS解析URL对应的IP：浏览器首先会检查本地缓存中是否有该URL的IP地址，
   如果没有，则会向本地DNS服务器发送一个DNS查询请求，以获取URL的IP地址，如果本地DNS服务器也没有该IP地址的缓存，它将向顶级DNS服务器发出请求
2. 请求对应的服务器地址，建立TCP连接，发送HTTP请求并响应
3. 服务端处理请求并完成响应
4. 关闭TCP连接：浏览器会关闭与服务器之间的TCP连接。这是通过四次挥手来完成的，即浏览器发送一个关闭连接的请求，服务器回复一个确认关闭连接的响应，最后浏览器再次发送一个确认关闭连接的响应
5. 渲染页面：浏览器解析HTML代码，并根据CSS样式和JavaScript脚本来渲染页面
   