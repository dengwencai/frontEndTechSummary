
position:sticky：粘性定位，相对于最近的可滚动祖先元素进行定位

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #a1 {
        width: 100px;
        height: 200px;
        overflow: scroll;
        border: 1px red solid;
      }
      #a2 {
        position: sticky;
        width: 50px;
        height: 50px;
        border: 1px red solid;
        top: 10px;
      }
    </style>
  </head>
  <body>
    <div id="a1">
      <div id="a2"></div>
      <div>
        adsda大大的11adsda大大的11adsda大大的11adsda大大的11adsda大大的11adsda大大的11adsda大大的11adsda大大的11adsda大大的11adsda大大的11adsda大大的11adsda大大的11adsda大大的11adsda大大的11adsda大大的11adsda大大的11adsda大大的11adsda大大的11adsda大大的11adsda大大的11adsda大大的11adsda大大的11adsda大大的11adsda大大的11adsda大大的11
      </div>
    </div>
  </body>
</html>
```
