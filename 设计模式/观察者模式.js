// 观察者模式
// 观察者模式是一种设计模式，其中主题（被观察者）维护一个观察者列表，并在状态改变时通知观察者
// 被观察者，有事件发生时，通知观察者
class Subject {
  constructor() {
    // 观察者列表，注册和移除都是操作这个列表
    this.observerList = []
  }
  // 增加观察者
  addObserver(observer) {
    this.observerList.push(observer);
  }
  // 去掉观察者
  removeObserver(observer) {
    this.observerList = this.observerList.filter((item)=>item !== observer);
  }

  // 通知观察者
  notify(data) {
    this.observerList.forEach((observer)=>{
        observer.update(data)
    })
  }
}


// 观察者
class Observer{
    constructor(name){
        this.name = name
    }
    //接受来自主题的数据的方法
    update(data){
        console.log('接受来自主题的数据',this.name+ ':' +data)
    }
}

// 主题
const subject = new Subject();

// 观察者
const observer1 = new Observer('observer1');
const observer2 = new Observer('observer2'); 

// 主题添加观察者
subject.addObserver(observer1);
subject.addObserver(observer2);

// 主题有事件发生，通知观察者

subject.notify('临时下班');

// 去除observer2，此时只剩下observer1
subject.removeObserver(observer2);

//只有observer1能接受到信息
subject.notify('准备发那个叫爱'); 