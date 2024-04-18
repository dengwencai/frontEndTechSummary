
mixin本质是一个对象，可以包含一些组件常见的配置，如data，methods，生命钩子函数等


```javascript

export const mixins = {
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};

```

全局引入
```javascript

import Vue from "vue";
import App from "./App.vue";
import { mixins } from "./mixin/index";
Vue.mixin(mixins);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

```



部分引入
```vue

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <button @click="clickMe">点击我</button>
  </div>
</template>

<script>
import { mixins } from "./mixin/index";
export default {
  name: "App",
  mixins: [mixins],
  components: {},
  created(){
    console.log("组件调用minxi数据",this.msg);
  },
  mounted(){
    console.log("我是组件的mounted生命周期函数")
  }
};
</script>

```

### 总结
1. mixin中的生命周期函数会和组件的生命周期函数一起合并执行，生命周期函数合并后执行顺序：先执行mixin中的，后执行组件的。
2. mixin中的data数据在组件中也可以使用。
3. mixin中的方法在组件内部可以直接调用。

<!-- 参考文档：https://zhuanlan.zhihu.com/p/482735975 -->


