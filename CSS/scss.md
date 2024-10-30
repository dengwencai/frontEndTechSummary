### sass使用

参考文档： https://www.cnblogs.com/jf-67/p/7650303.html

混合和继承区别：
1. 混合：会产生冗余代码。
2. 继承：会把拥有被继承的样式单独提炼出来写到当前样式表中，可以减少代码量。

```vue
<template>
  <div class="test">
    <div class="title">
      <div class="value1">111</div>
      <div class="value2">222</div>
      <div class="value3">333</div>
      <div class="value4">444</div>
      <div class="value5">555</div>
    </div>

    <!-- 按钮 -->
    <div class="btn-group">
      <button class="btn-1">按钮1</button>
      <button class="btn-2">按钮2</button>
      <button class="btn-3">按钮3</button>
      <button class="btn-4">按钮4</button>
      <button class="btn-5">按钮5</button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
// 混合
@mixin comm2 {
  color: red;
  font-size: 24px;
}

// 带有默认参数的混合
@mixin comm3($radius: 5px) {
  border-radius: $radius;
}

// 带有参数的混合，没有默认参数
@mixin comm4($radius) {
  border-radius: $radius;
}

%comm1 {
  color: blue;
  font-size: 24px;
}

// 继承
.value1 {
  @extend %comm1;
  margin-right: 10px;
}

.value2 {
  @extend %comm1;
  margin-right: 10px;
}

.value3 {
  @include comm2;
}

.value4 {
  @include comm3;
  border: 1px red solid;
}

.value5 {
  @include comm3(10px);
  border: 1px red solid;
}

// 循环生成按钮样式
$btnColors: #428bca, #5cb85c, #5bc0de, #f0ad4e, #d9534f;

@for $i from 1 through length($btnColors) {
  .btn-#{$i} {
    background-color: nth($btnColors, $i);
    &:hover {
      background-color: lighten(nth($btnColors, $i), 10%);
    }
    &:active {
      background-color: darken(nth($btnColors, $i), 10%);
    }
    &:disabled {
      background-color: lighten(nth($btnColors, $i), 20%);
      color: white;
    }
  }
}
</style>


```





demo案例
```vue
<template>
  <div class="crm-group">
    <div
      :class="{
        ['crm-group__btn--' + type]: type,
        'button--disabled': disabled && isGray
      }"
      :disabled="disabled"
      @click="handleClick"
    >
      <slot name="default"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

type ButtonType = 'primary' | 'success' | 'warning' | 'error' | 'info'

const props = defineProps({
  // 控制disabled的样式，如果开启，那么disabled就是灰色，不开启，那么就是原有颜色淡一点
  isGray: {
    type: Boolean,
    default: false
  },
  type: {
    type: String as () => ButtonType,
    default: 'primary'
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits(['click'])

// 点击方法
const handleClick = (e: any) => {
  if (props.disabled === true) {
    return
  }
  emits('click', e)
}
</script>

<style scoped lang="scss">
// 按钮变量
$btn-width: 624px;
$btn-height: 98px;
$btn-radius: 49px;
$btn-size: 36px;

// 按钮样式
%btn-property {
  width: $btn-width;
  height: $btn-height;
  border-radius: $btn-radius;
  line-height: $btn-height;
  text-align: center;
  font-family:
    PingFangSC,
    PingFang SC;
  font-weight: 500;
  font-size: 36px;
  color: #ffffff;
  font-style: normal;
}

// 循环生成按钮样式,次数需要name和color的个数一致，对应生成按钮样式
$btnNames: success, warning, error, info, primary;
$btnColors: #5cb85c, #f0ad4e, #eb4547, #5bc0de, #428bca;

@for $i from 1 through length($btnNames) {
  .crm-group__btn--#{nth($btnNames, $i)} {
    background-color: nth($btnColors, $i);
    @extend %btn-property;

    // 鼠标悬停状态
    &:hover {
      background-color: lighten(nth($btnColors, $i), 10%);
    }
    // 点击状态
    &:active {
      background-color: darken(nth($btnColors, $i), 10%);
    }

    // 禁用状态
    &[disabled='true'] {
      background-color: lighten(nth($btnColors, $i), 20%);
      color: white;
    }

    // 禁用状态
    &.button--disabled {
      background-color: #bbbbbb;
      color: white;
    }
  }
}
</style>


```