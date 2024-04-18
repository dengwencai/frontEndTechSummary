// 1. Array.flat
// const arr = [1, 2, 3, [4, 5, 6, [7, 8, 9]]]
// console.log(arr.flat(Infinity));

// 2. Array.flatMap
// let arr = ["科比 詹姆斯 安东尼", "利拉德 罗斯 麦科勒姆"];
// const result = arr.flatMap(x => x.split(" "))
// console.log(result);

// 3. BigInt

// 4. Object.fromEntries跟Object.Entries相反
// 备注：还有一个用处，就是把Map转为对象
// const arr = [
//     ['name', '林三心'],
//     ['age', 22],
//     ['gender', '男']
//   ]

//   console.log(Object.fromEntries(arr)) // { name: '林三心', age: 22, gender: '男' }

// const map = new Map()
// map.set('name', '林三心')
// map.set('age', 22)
// map.set('gender', '男')

// console.log(map) // Map(3) { 'name' => '林三心', 'age' => 22, 'gender' => '男' }

// const obj = Object.fromEntries(map)
// console.log(obj) // { name: '林三心', age: 22, gender: '男' }

// 5. String.trimStart && String.trimEnd

const str = '    林三心    '
console.log(str.trimStart()) // '林三心'

// !!!参考文档：https://blog.csdn.net/weixin_38664300/article/details/125332006