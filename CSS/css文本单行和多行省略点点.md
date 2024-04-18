### css 单行文本省略号
```css
.ellipsis {
  white-space: nowrap; /* 不换行 */
  overflow: hidden; /* 超出部分隐藏 */
  text-overflow: ellipsis; /* 显示省略号 */
}
```


### css 多行文本省略号
```css
.multi-line-ellipsis {
        display: -webkit-box; /* 必须设置此项才能生效 */
        -webkit-line-clamp: 2; /* 限制最大行数 */
        -webkit-box-orient: vertical; /* 垂直布局 */
        overflow: hidden; /* 超出部分隐藏 */
        text-overflow: ellipsis; 显示省略号
    }
```
