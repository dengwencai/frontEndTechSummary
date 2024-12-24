<template>
  <div>
    <button @mouseover="handleEneter" @mouseout="handleLeave">更多</button>
    <div class="content">
      sadadadASDADdadadaDASD大萨达大大大但事实上大大大撒大萨达哒哒哒哒哒哒湿哒哒
      sadadadASDADdadadaDASD大萨达大大大但事实上大大大撒大萨达哒哒哒哒哒哒湿哒哒
      sadadadASDADdadadaDASD大萨达大大大但事实上大大大撒大萨达哒哒哒哒哒哒湿哒哒
      sadadadASDADdadadaDASD大萨达大大大但事实上大大大撒大萨达哒哒哒哒哒哒湿哒哒
    </div>
  </div>
</template>

<script setup lang="ts">
const handleEneter = (e: any) => {
  const content = document.querySelector('.content') as HTMLElement
  content.style.height = 'auto'
  const { height } = content.getBoundingClientRect()
  content.style.height = '0'

  // 读取任何几何属性，那么会触发重绘
  content.getBoundingClientRect()
  content.style.height = height + 'px'

  // 或者使用 requestAnimationFrame，在下一帧渲染时在执行
  // requestAnimationFrame(() => {
  //   content.style.height = height + 'px'
  // })
}

const handleLeave = (e: any) => {
  const content = document.querySelector('.content') as HTMLElement
  content.style.height = '0'
}
</script>

<style scoped lang="scss">
.content {
  width: 100px;
  height: 0;
  overflow: hidden;
  border: 1px red solid;
  /* 强制换行 */
  word-wrap: break-word;
  transition: all 0.3s ease-in-out;
}

// button:hover + .content {
//   height: auto;
// }
</style>
