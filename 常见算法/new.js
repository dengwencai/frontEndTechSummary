// 实现new关键字
// todo 编写一个函数，该函数接受构造函数和构造函数参数，并返回新的实例对象

// 这个 myNew 函数首先创建一个新对象 obj，然后将新对象的原型指向构造函数 constructor 的原型。
// 接下来，它调用构造函数，并将新对象绑定到构造函数的上下文中。
// 最后，它检查构造函数的返回值，如果是对象则返回该对象，否则返回新创建的对象。

function myNew(constructor, ...args) {
  // 创建一个对象，并将其原型指向构造函数的原型
  const obj = Object.create(constructor.prototype);
  // 调用构造函数，并把新对象绑定到构造函数的上下文中
  const result = constructor.apply(obj, args);

  //如果构造函数返回的是一个对象，则返回该对象，否则返回新对象
  return typeof result === "object" ? result : obj;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 使用 myNew 模拟 new 操作符
const person1 = myNew(Person, "Alice", 30);
const person2 = myNew(Person, "Bob", 25);

console.log(Person('Alice',10)); // 输出: Person { name: 'Alice', age: 30 }
console.log(person2); // 输出: Person { name: 'Bob', age: 25 }
