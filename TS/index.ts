// 一、 type和interface的相同点
// 1.1 都可以描述一个对象或者函数
// interface User {
//     name: string
//     age: number
//   }

//   interface SetUser {
//     (name: string, age: number): void;
//   }


//   type User = {
//     name: string
//     age: number
//   };

//   type SetUser = (name: string, age: number)=> void

// 1.2 都允许拓展（extends）
// interface extends interface
// interface Name {
//     name: string;
// }
// interface User extends Name {
//     age: number;
// }

// type extends type
// type Name = {
//     name: string;
// }
// type User = Name & { age: number };

// 二、type和interface区别
// 2.1 type 可以而 interface 不行
// type 可以声明基本类型别名，联合类型，元组等类型
// type 语句中还可以使用 typeof 获取实例的 类型进行赋值
// 基本类型别名
// type Name = string

// // 联合类型
// interface Dog {
//     wong();
// }
// interface Cat {
//     miao();
// }

// type Pet = Dog | Cat

// // 具体定义数组每个位置的类型
// type PetList = [Dog, Pet]

// let div = document.createElement('div');
// type B = typeof div


// 2.2 interface 可以而 type 不行
// interface User {
//     name: string
//     age: number
//   }
  
//   interface User {
//     sex: string
//   }
  
  /*
  User 接口为 {
    name: string
    age: number
    sex: string 
  }
  */

// 定义全局类型
const a:any = jQuery?.version
console.log("%c Line:78 🥥 a", "color:#465975", a);
// 总结：使用 interface 描述‘数据结构’，使用 type 描述‘类型关系’
//!!! 参考文档：https://juejin.cn/post/6844903749501059085
//!!! 参考文档：https://juejin.cn/post/6999985372440559624
