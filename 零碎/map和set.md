### Map

```js
//   对象---》数组
let obj = {
  a: 1,
  b: 2,
};

let keys = Object.keys(obj);
let values = Object.values(obj);
let keyValues = Object.entries(obj);

//   数组转对象
let listobj = [
  ["a", 1],
  ["b", 2],
];

let r = Object.fromEntries(listobj);

// {a:1,b:2}

// map和set===》数组

//   set，get，has，delete，clear
let map = new Map();
map.set("a", 1);
map.set("b", 2);
map.get("a");
map.delete("b");
map.clear();
//   console.log(map)

let list = Array.from(map);

// [['a',1],['b',]]
```

### WeakMap

```javascript
//   WeakMap
// 它的key只能是Object或者Symbol
let wm = new WeakMap();
let obj1 = {
  a: 1,
};
wm.set(obj1, 1);
console.log(wm);
```

### Set

```javascript
let set = new Set();
set.add("a");
set.add("b");
set.has("a");
set.delete("b");
set.clear();

//   set 转化为数组
// [...new Set()]
```
