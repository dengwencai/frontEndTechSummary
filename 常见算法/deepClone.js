// 深拷贝
// 思路：先转化为基础类型数据


function deepClone(obj) {
  if (typeof obj !== "object") {
    return obj;
  }

  const clone = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    // 普通类型
    if (typeof obj[key] !== "object") {
      clone[key] = obj[key];
    } else {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}

// const obj1 = {
//   a: 1,
//   b: {
//     c: 1,
//   },
// };

// const arr1 = [2,3,2,233,6]

// const deepObj1 = deepClone(arr1);
// arr1[1] = 111

// console.log("%c Line:22 🌶 obj1", "color:#6ec1c2", arr1);
// console.log("%c Line:29 🍭 deepObj1", "color:#b03734", deepObj1);
