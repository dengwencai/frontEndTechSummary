```html

<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title></title>
  </head>
  <body>
    <video id="video" autoplay></video>

    <div>
      <button id="capture">拍照</button>
    </div>

    <!-- 展示拍摄的照片 -->
    <canvas id="canvas" width="480" height="320"></canvas>

    <script type="text/javascript">
      window.onload = function () {
        // 1.获取标签
        var video = document.getElementById("video");
        var capture = document.getElementById("capture");
        var ctx = document.getElementById("canvas").getContext("2d");

        // 调用媒体对象
        // 参数为constraints 一个约束对象  是video还是audio
        navigator.mediaDevices
          .getUserMedia({
            video: {
              width: 480,
              height: 320,
            },
          })
          .then(function (stream) {
            // 获取到window.URL对象
            var URL = window.URL || window.webkitURL;
            // 创建一个video的url字符串
            try {
              video.src = URL.createObjectURL(stream);
            } catch (e) {
              video.srcObject = stream;
            }
            // 视频播放
            video.play();
          })
          .catch(function (err) {
            console.log(err);
          });
        // 点击拍照按钮事件
        capture.onclick = function () {
          ctx.drawImage(video, 0, 0, 480, 320);
        };
      };
    </script>
  </body>
</html>



```

<!-- 参考文档：https://www.cnblogs.com/cangqinglang/p/10210826.html
https://lv-z-l.github.io/front-end-blog/html5css/#%E8%A7%86%E9%A2%91-video -->