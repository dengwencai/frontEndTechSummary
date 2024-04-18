const obj = {
  name: "xiam",
  age: 10,
};

// set get跟value，writable不能同时设置
Object.defineProperty(obj, "name", {
//   value: "",
  set(value) {
    return value
  },
  get() {
    return 111
  },
  enumerable: true, //是否可以枚举
//   writable: true, //是否可以改
  configurable: true, //是否可以删除该属性
});

obj.name = 'adsdad'
