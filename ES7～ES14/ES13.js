// 一. class扩展
// 1.1 类成员声明：在ES13之前，我们只能在构造函数里面声明类的成员，ES13中，可以在外面写

// class Car {
//     color = 'blue';
//     age = 2;
//   }
  
//   const car = new Car();
//   console.log(car.color); // blue
//   console.log(car.age); // 2

// 1.2 私有属性和私有方法: 在ES13中，我们只需要给我们的属性/方法添加一个hashtag(#)前缀，这个属性/方法就变成私有的了
// class Person {
//     #firstName = 'randy';
//     #lastName = 'su';
    
//     #say() {
//       console.log('say hello')
//     }
  
//     get name() {
//       this.#say();
//       return `${this.#firstName} ${this.#lastName}`;
//     }
//   }
  
//   const person = new Person();
//   console.log(person.name); // say hello randy su
  
//   // 下面都会报错
//   // SyntaxError: Private field '#firstName' must be
//   // declared in an enclosing class
//   console.log(person['#firstName']);

// 1.3 静态私有属性和私有方法, 跟私有属性和私有方法使用一样，在前面添加#
// class Person {
//     static #count = 0;
  
//     static getCount() {
//       return this.#count;
//     }
  
//     constructor() {
//       this.constructor.#incrementCount();
//     }
  
//     static #incrementCount() {
//       this.#count++;
//     }
//   }

// 1.4 判断是否有私有变量

// 1.5 支持定义静态代码块：ES13允许在类中通过static关键字定义一系列静态代码块，这些代码块只会在类被创造的时候执行一次。

// class Vehicle {
//     static defaultColor = 'blue';
//   }
  
//   class Car extends Vehicle {
//     static colors = [];
  
//     static {
//       this.colors.push(super.defaultColor, 'red');
//     }
  
//     static {
//       this.colors.push('green');
//     }
  
//   }

//  console.log(Car.colors); //['blue', 'red', 'green']

// 二、Async Await扩展

// function setTimeoutAsync(timeout) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(1);
//       }, timeout);
//     })
//   }
//   const result = await setTimeoutAsync(3000);  
//   console.log("%c Line:86 🥟 result", "color:#fca650", result);

// 三、Array和String扩展
// 3.1 at函数：可以使用at函数来索引元素，支持数组和字符串
// const arr = ['a', 'b', 'c', 'd'];

// // 第一个元素
// console.log(arr.at(0)); // a
// // 倒数第一个元素
// console.log(arr.at(-1)); // d
// // 倒数第二个元素
// console.log(arr.at(-2)); // c

// const str = 'randy';

// // 第一个元素
// console.log(str.at(0)); // r
// // 倒数第一个元素
// console.log(str.at(-1)); // y
// // 倒数第二个元素
// console.log(str.at(-2)); // d

// 注意传正数从前往后找，下标从0开始。传负数从后往前找，下标从-1开始。

// 四、RegExp扩展
// 4.1 支持返回开始和结束索引
// 简单来说这个新属性就是允许我们告诉RegExp在返回match对象的时候，给我们返回匹配到的子字符串的开始和结束索引

// 五、Object扩展
// 5.1 Object.hasOwn() 
// Object.hasOwn()函数接收两个参数，一个是对象，一个是属性，如果这个对象本身就有这个属性的话，这个函数就会返回true，否则就返回false。

// const obj = Object.create(null);
// obj.color = 'green';
// obj.age = 2;

// console.log(Object.hasOwn(obj, 'color')); // true
// console.log(Object.hasOwn(obj, 'name')); // false

// 六、Error扩展
// Error对象的cause属性
// ES13后，Error对象多了一个cause属性来指明错误出现的原因。这个属性可以帮助我们为错误添加更多的上下文信息，从而帮助使用者们更好地定位错误。
// 这个属性是我们在创建error对象时传进去的第二个参数对象的cause属性:
// function userAction() {
//   try {
//     apiCallThatCanThrow();
//   } catch (err) {
//     throw new Error('New error message', { cause: '请求出错啦' });
//   }
// }

// try {
//   userAction();
// } catch (err) {
//   console.log(err);
//   console.log(`Cause by: ${err.cause}`); // Cause by: 请求出错啦
// }

// !!!参考文档：https://blog.csdn.net/weixin_38664300/article/details/125332006
// 参考文档: https://juejin.cn/post/6995334897065787422