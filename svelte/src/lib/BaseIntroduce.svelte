<script>
    import Counter from "./Counter.svelte";
    import Iphone from "./Iphone.svelte";
    import {
      onMount, //组件挂载时调用。
      onDestroy, //组件销毁时执行
      beforeUpdate, //在数据更新前执行
      afterUpdate, //在数据更新完成后执行
      tick, //DOM元素更新完成后执行
    } from "svelte";
  
    let name = "雷辉";
    let a = 1,
      b = 2;
    let h1El = '<h1 style="color: pink;">雷猴</h1>';
  
    function btnClick() {
      count++;
    }
  
    let color = "red";
    setTimeout(() => {
      color = "blue";
    }, 1000);
  
    let foo = true;
    setTimeout(() => {
      foo = false;
    }, 1000);
  
    let state = true;
    setTimeout(() => {
      state = false;
    }, 1000);
  
    let count = 2;
  
    let list = [1, 2, 3, 4, 5, 6, 7];
    let listObj = [
      { name: "小王", age: 10 },
      { name: "小伟", age: 20 },
    ];
  
    let msg = "hello";
  
    function print() {
      console.log(msg);
      msg = "阿斯顿撒旦";
    }
  
    let selected = "2";
    let selectedM = [];
  
    let countm = 0;
    $: doubled = countm * 2;
  
    function handleClick() {
      countm += 1;
    }
  
    const api = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("请求成功，数据是xxxxx");
      }, 1000);
    });
  
    function modify(data) {
      console.log(data);
      number = data.detail;
    }
    let number = "adadasdd1111";
  
    // 生命周期
    let title = "Hello world";
    onMount(() => {
      console.log("onMount");
      setTimeout(() => (title = "雷猴"), 1000);
    });
  </script>
  
  <!-- 变量 -->
  <div>Hello {count}</div>
  
  <!-- 绑定点击事件 -->
  <!-- 串联修饰符once,preventDefault,stopPropagation,capture -->
  <button on:click|once={btnClick}>修改</button>
  
  <!-- 表达式 -->
  {a + b}
  
  <!-- 渲染html -->
  {@html h1El}
  
  <!-- 行内样式 -->
  <div style="color: {color}">雷猴</div>
  
  <!-- class样式 -->
  <div class:active={foo}>雷猴</div>
  
  <!-- 条件判断 -->
  {#if state}
    <div>雷猴</div>
  {/if}
  
  <!-- 两个判断 -->
  {#if state}
    <div>雷猴</div>
  {:else}
    <div>雷猴1</div>
  {/if}
  
  <!-- 多个判断 -->
  {#if count === 1}
    1
  {:else if count === 2}
    2
  {:else}
    3
  {/if}
  
  <!-- 遍历循环 -->
  {#each list as item, index}
    <div>
      {item}
      {index}---
    </div>
  {/each}
  
  <!-- 遍历循环，如果元素是对象，可以解构 -->
  {#each listObj as { name }, index}
    <div>
      {name}
      {index}---
    </div>
  {/each}
  
  <input type="text" bind:value={msg} />
  <button on:click={print}>打印</button>
  
  <!-- 单选框 -->
  <input type="radio" bind:group={selected} value="1" />apple
  <input type="radio" bind:group={selected} value="2" />orange
  <input type="radio" bind:group={selected} value="3" />net
  <p>{selected}</p>
  
  <!-- 多选框 -->
  <select multiple bind:value={selectedM}>
    <option value="雷猴">雷猴</option>
    <option value="鲨鱼辣椒">鲨鱼辣椒</option>
    <option value="蟑螂恶霸">蟑螂恶霸</option>
    <option value="蝎子莱莱">蝎子莱莱</option>
  </select>
  <span>{selectedM}</span>
  
  <!-- 计算属性 -->
  <div>
    <button on:click={handleClick}> 点击加1 </button>
  
    <p>{countm} 翻倍后 {doubled}</p>
  </div>
  
  <!-- 异步渲染标签 -->
  {#await api}
    <span>Loading</span>
  {:then response}
    <span>{response}</span>
  {:catch error}
    <span>{error}</span>
  {/await}
  
  <!-- 父子组件 -->
  <!-- 父传子 -->
  <Counter {number} />
  
  <!-- 子传父 -->
  <Iphone on:printPhone={modify} />
  
  <!-- 插槽 -->
  <Iphone>
    <div>电话：</div>
    <div>13288889999</div>
  </Iphone>
  
  <style>
    .active {
      color: red;
    }
  </style>
  