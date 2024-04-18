```javascript

      // 要解析的URL
      var urlString =
        "https://www.example.com:8080/path/to/resource?param1=value1&param2=value2#section3";

      // 创建一个URL对象
      var url = new URL(urlString);

      // 获取各个部分
      var protocol = url.protocol; // 协议（包括冒号）：https:
      var host = url.host; // 主机名（包括端口号）：www.example.com:8080
      var hostname = url.hostname; // 主机名：www.example.com
      var port = url.port; // 端口号：8080
      var pathname = url.pathname; // 路径：/path/to/resource
      var search = url.search; // 查询参数（包括问号）：?param1=value1&param2=value2
      var hash = url.hash; // 片段标识符（包括井号）：#section3
      var searchParams = url.searchParams; // 查询参数的键值对对象
      console.log("%c Line:27 🍩 searchParams", "color:#33a5ff", searchParams);

      let obj = {}
      // 输出查询参数的键值对
      searchParams.forEach(function (value, key) {
        obj[key] = value
        console.log("查询参数 " + key + ": " + value);
      });

      console.log(obj)

```

<!-- 参考文档：https://lv-z-l.github.io/front-end-blog/write/parse-url.html -->