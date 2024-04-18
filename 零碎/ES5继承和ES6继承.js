// // ES5继承
// function Sup(name) {
//     this.name = name// 实例属性
// }
// Sup.type = '午'// 静态属性
// // 静态方法
// Sup.sleep =  function () {
//     console.log(`我在睡${this.type}觉`)
// }
// // 实例方法
// Sup.prototype.say = function() {
//     console.log('我叫 ' + this.name)
// }


// function Sub(name, age) {
//     // 继承父类的实例属性
//     Sup.call(this, name)
//     // 自己的实例属性
//     this.age = age
// }

// // ES6继承
// class Sup {
//     constructor(name) {
//         this.name = name
//     }

//     say() {
//         console.log('我叫 ' + this.name)
//     }

//     static sleep() {
//         console.log(`我在睡${this.type}觉`)
//     }
// }

// class Sub extends Sup {
//     constructor(name, age) {
//         super(name)
//         this.age = age
//     }

//     say() {
//         console.log('你好')
//         super.say()
//         console.log(`今年${this.age}岁`)
//     }
// }
// Sub.type = '懒'

// const a = new Sub(1,2)

