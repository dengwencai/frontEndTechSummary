```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      :root {
        --bg-color: red;
        --with: 100;
      }
      #container {
        color: var(--bg-color) !important;
        width: calc(var(--with) * 1px);
        height: calc(var(--with) * 1px);
        border: 1px red solid;
      }
      #aaa {
        color: var(--bg-color) !important;
        width: calc(var(--with) * 1px);
        height: calc(var(--with) * 1px);
        border: 1px red solid;
      }
    </style>
  </head>
  <body>
    <div id="container" style="color:purple">111</div>
    <div id="aaa">2222</div>

    <button onclick="getFn()">get</button>
    <button onclick="setfn()">set</button>

    <script>
      let dom = document.querySelector("#container");

      function getFn() {
        const v = getComputedStyle(dom).getPropertyValue("--bg-color");
        console.log("%c Line:32 🍣 dom", "color:#33a5ff", v);
      }

      function setfn() {
        dom.style.setProperty("--bg-color", "blue", "important");
      }
    </script>
  </body>
</html>
```


 参考文档：https://blog.csdn.net/wxingna/article/details/112168993



1. 使用--声明变量，var读取变量
   ```css
   <!-- 声明全局变量，如果在选择器内部声明，那么时局部变量 -->
   :root{
    --header-height:68px;
   }

    .box1{
            height: var(--header-height);
            <!-- var()函数还可以使用第二个参数，表示变量的默认值。如果该变量不存在，就会使用这个默认值。
            color: var(--bar,red); -->
        }

   ```
参考文档：https://blog.csdn.net/weixin_52629158/article/details/129955720
