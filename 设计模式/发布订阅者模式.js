//发布订阅者模式
class EventEmitter {
  constructor() {
    this._events = {};
  }

  // 根据事件类型，增加回调引用，有时间发生时，会通知events里面回调
  on(eventName, callback) {
    if (this._events[eventName]) {
      if (this.eventName !== "newListener") {
        this.emit("newListener", eventName);
      }
    }
    const callbacks = this._events[eventName] || [];
    callbacks.push(callback);
    this._events[eventName] = callbacks;
  }
  // 根据事件类型，发布消息
  emit(eventName, ...args) {
    const callbacks = this._events[eventName] || [];
    callbacks.forEach((cb) => cb(...args));
  }

  once(eventName, callback) {
    const one = (...args) => {
      callback(...args);
      this.off(eventName, one);
    };
    one.initialCallback = callback;
    this.on(eventName, one);
  }

  // 根据事件类型，删掉回调引用
  off(eventName, callback) {
    const callbacks = this._events[eventName] || [];
    const newCallbacks = callbacks.filter(
      (fn) =>
        fn != callback &&
        fn.initialCallback != callback /* 用于once的取消订阅 */
    );
    this._events[eventName] = newCallbacks;
  }
}

const events = new EventEmitter();

let cb = function () {
  console.log("cb");
};

events.on("e1", cb);

events.emit('e1','asdasda')

// 参考文档：https://juejin.cn/post/6985156199192723487?searchId=2023111003145934B1CBC3F729B1CA16F2
