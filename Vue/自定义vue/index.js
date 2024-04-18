class Vue {
  constructor(obj) {
    this.$data = obj.data;
    Observer(this.$data);
    Compile(obj.el, this);
  }
}

// 数据劫持
function Observer(data) {
  if (!data || typeof data !== "object") return;
  const dep = new Dependency()
  for (let key in data) {
    let val = data[key];
    Observer(val);
    Object.defineProperty(data, key, {
      get() {
        Dependency.temp && dep.addSub(Dependency.temp)
        return val;
      },
      set(newVal) {
        console.log("set", data);
        val = newVal;
        dep.notify()
      },
    });
  }
}

// 获取页面元素-----》放入临时内存区域----》应用vue数据----》渲染页面

// 解析HTMl中template模版
function Compile(ele, vm) {
  vm.$el = document.querySelector(ele);
  // 创建文档碎片，存在内存中，不会渲染
  let fragment = document.createDocumentFragment();
  // console.log("%c Line:39 🍻 vm.$el.childNodes", "color:#3f7cff", vm.$el.childNodes);
  // childNodes分为元素节点，文本节点（文字和空白），注释节点
  // todo 把子元素放入文档碎片中
  // let child;
  // while(child = vm.$el.firstChild){
  //     fragment.append(child)
  // }
  // 把页面上的元素都放入了文档碎片中
  Array.from(vm.$el.childNodes).forEach((item) => {
    fragment.append(item);
  });

  // 修改文档碎片中文本内容（文档类型为3）
  fragment_compile(fragment);

  // 修改文档碎片中文本内容（文档类型为3）
  function fragment_compile(node) {
    const pattern = /\{\{\s*(\S+)\s*\}\}/;
    // 处理文本类型
    if (node.nodeType === 3) {
      const tempNodeVal = node.nodeValue
      const resultReg = pattern.exec(node.nodeValue);
      if (resultReg) {
        // resultReg[1]--->more.age--->['more','age']
        const arr = resultReg[1].split(".");
        let val = arr.reduce((total, current) => {
          return total[current];
        }, vm.$data);
        // 初始化赋值
        node.nodeValue = node.nodeValue.replace(pattern, val);
        // 更新属性时，触发，修改对应的值
        new Watcher(vm,resultReg[1],(newVal)=>{
            node.nodeValue = tempNodeVal.replace(pattern, newVal);
        })
      }
    }
    // 处理input v-model
    if(node.nodeType === 1 && node.nodeName === 'INPUT'){
        const attrs = node.attributes;
        Array.from(attrs).forEach(attr=>{
            if(attr.nodeName === 'v-model'){
                // 找出v-model绑定的key，在data里面的值
                const value = attr.nodeValue.split('.').reduce((total,current)=>{
                    return total[current]
                },vm.$data)
                node.value = value;
                // 更新属性时，触发，修改对应的值
                new Watcher(vm,attr.nodeValue,(newVal)=>{
                    node.value = newVal;
                })
                // 给dom增加监听事件，修改vm里面的data
                node.addEventListener('input',function(e){
                    // 数据
                    // vm.$data[attr.nodeValue] = e.target.value；
                    // more.age--->['more', 'age']
                    const arr1 = attr.nodeValue.split('.');
                    const arr2 = arr1.slice(0,arr1.length - 1);
                    // 获取最里面的对象
                    const final = arr2.reduce((t,c)=>{
                        return t[c]
                    },vm.$data)

                    final[arr1[arr1.length - 1]] = e.target.value
                })
            }
        })
    }
    
    node.childNodes.forEach((child) => {
      fragment_compile(child);
    });
  }

  vm.$el.appendChild(fragment);

  console.log(fragment);
  console.log(fragment.childNodes);
}

// 依赖，收集订阅者
class Dependency {
  constructor() {
    this.subscribers = [];
  }
  addSub(ob) {
    this.subscribers.push(ob);
  }
  removeSub(ob) {
    this.subscribers = this.subscribers.filter((sub) => sub !== ob);
  }
  notify(){
    this.subscribers.forEach(sub=>{
        sub.update()
    })
  }
}

// 订阅者
class Watcher{
    constructor(vm,key,callback){
        this.vm = vm;
        this.key = key;//这里的key代表模板字符串中的字符串
        this.callback = callback
        Dependency.temp = this;
        // 触发getter
        key.split('.').reduce((total,current)=>{
            return total[current]
        },vm.$data)
        Dependency.temp = null
    }
    update(){
        const val = this.key.split('.').reduce((total,current)=>{
            return total[current]
        },vm.$data)
        this.callback(val)
    }
}


// 参考文档：https://www.bilibili.com/video/BV1934y1a7MN/?spm_id_from=333.337.search-card.all.click&vd_source=0113bf94553f5b58987085f68d51d67d