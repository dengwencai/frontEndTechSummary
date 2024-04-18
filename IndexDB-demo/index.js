/**
 * Copyright (c) 2023 dengwencai
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

//  console.log("%c Line:10 🥃 localforage", "color:#b03734", localforage);

// 创建多个localForage的新实例，每个实例对象都有独立的数据库，而不会影响到其他实例
// const store = localforage.createInstance({
//   name: "nameHere",
//   storeName:'test1'
// });
// const otherStore = localforage.createInstance({ name: "nameHere",storeName:'test3' });
// store.setItem("key", "value");
// otherStore.setItem("key", "value2");

// // 删除指定的数据库或表
// localforage.dropInstance({
//     name: 'nameHere',
//     storeName:'test1'
// })
  
// default config of dataDB
localforage.config({
  driver: localforage.INDEXEDDB,
  name: "测数storageDB", //数据库的名称
  size: 4980736, //数据库的大小，现在只用于WebSQL，默认值为4980736
  storeName: "dataStoretest", //表的名称，IndexedDB中为dataStore，在WebSQL中为数据库 key/value 键值表的名称，仅含字母和数字和下划线。任何非字母和数字字符都将转换为下划线
  version: "1.1.0",
  description: "测试用的数据库",
});

// 设置数据仓库后端驱动
localforage.setDriver(localforage.INDEXEDDB);

(async function () {
  const d = localforage.driver();
  console.log("%c Line:25 🥐 d", "color:#7f2b82", d);
})();

// 增加
async function addBtn() {
  const keyText = document.getElementById("keyInput").value;
  const inputText = document.getElementById("textInput").value;
  const data = await localforage.setItem(keyText, inputText);
  console.log("%c Line:33 🍬增加 data", "color:#ffdd4d", data);
}

// 删除
async function delBtn() {
  const keyText = document.getElementById("keyInput").value;
  const data = await localforage.removeItem(keyText);
  console.log("%c Line:40 🥕删除 data", "color:#93c0a4", data);
}

// 修改
async function modifyBtn() {
  const keyText = document.getElementById("keyInput").value;
  const inputText = document.getElementById("textInput").value;
  const data = await localforage.setItem(keyText, inputText);
  console.log("%c Line:48 🍯修改 data", "color:#33a5ff", data);
}

// 查询
async function queryBtn() {
  const keyText = document.getElementById("keyInput").value;
  let data = await localforage.getItem(keyText);
  console.log("%c Line:55 🍤 查询 data", "color:#465975", data);
  document.getElementById("display-area").innerHTML =
    "查询的键值对" + keyText + ":" + data;
}

// 获取离线仓库中key的数量
(async function () {
  // const data = await localforage.length();
  // console.log('长度', data);
  // const data = await localforage.key(2);
  // console.log('根据索引获取key',data)
  // const data = await localforage.keys();
  // console.log('获取所有的keys',data);
  // 迭代获取数据库中所有的键值对
  // await localforage.iterate(function(value,key,index){
  //     console.log([key,value])
  //     console.log(index)
  // });
})();
