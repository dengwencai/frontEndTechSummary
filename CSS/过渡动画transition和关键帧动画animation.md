
```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    div{
      width: 100px;
      height: 100px;
      border: 1px red solid;
      animation: tops 10s infinite;
    }

    @keyframes tops{
      0%{
        background-color: red;
      }

      50%{
        background-color: purple;
      }
      100%{
        background-color: salmon;
      }

    }
  </style>
</head>
<body>
  <div>

  </div>

  <script>
    document.querySelector('div').addEventListener('animationstart',function(e){
      console.log("%c Line:36 🥥 e", "color:#ea7e5c", e);
    })

    document.querySelector('div').addEventListener('animationend',function(e){
      console.log("%c Line:36 🥥 e", "color:#ea7e5c", e);
    })

        document
    .querySelector('div').addEventListener('animationiteration',function(e){
      console.log("%c Line:46 🍇 e", "color:#ffdd4d", e);

    })
  </script>
</body>
</html>

```

<!-- 参考文档：https://zhuanlan.zhihu.com/p/598617735 -->



```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    div{
      width: 100px;
      height: 100px;
      background-color: brown;
      border: 1px red solid;
    }
    div:hover{
      background-color: red;
      transition: 1s ease-in-out;

    }
  </style>
</head>
<body>
  <div>

  </div>
</body>
</html>



```

<!-- 参考文档：https://blog.csdn.net/qq_52108058/article/details/129033377 -->