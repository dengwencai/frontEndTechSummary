// 链式调用
// 函数的链式调用是指在函数的结果上连续调用其他函数，形成一个函数的调用链条，每次都会返回一个新的对象或值

class Calculator {
    constructor(value = 0) {
      this.value = value;
    }
  
    add(num) {
      this.value += num;
      return this; // 返回实例以支持链式调用
    }
  
    subtract(num) {
      this.value -= num;
      return this;
    }
  
    multiply(num) {
      this.value *= num;
      return this;
    }
  
    divide(num) {
      this.value /= num;
      return this;
    }
  
    getValue() {
      return this.value;
    }
  }
  
  const result = new Calculator(10)
    .add(5)
    .multiply(2)
    .subtract(3)
    .divide(2)
    .getValue();
  
  console.log(result);