      // 1. Event
      // let myEvent = new Event("pingan", { bubbles: true, cancelable: false });
      // myEvent.aaa = 11
      // function updateBtn() {
      //   document.querySelector("button").dispatchEvent(myEvent);
      // }

      // window.addEventListener("pingan", (e) => {
      //   console.log(e)
      // });

      // 2. CustomEvent
      let myEvent = new CustomEvent("custompingan", {
        bubbles: true,
        cancelable: false,
        detail: {
          name: "asdasd",
        },
      });

      function updateBtn() {
        document.querySelector("button").dispatchEvent(myEvent);
        window.location.href = './second.html'
      }

      window.addEventListener("custompingan", (e) => {
        console.log(e);
      });


    //   Event和CustomEvent区别
    //   Event() 适合创建简单的自定义事件，
    //   而 CustomEvent() 支持参数传递的自定义事件，它支持 detail 参数，作为事件中需要被传递的数据，并在 EventListener 获取。

    // !!!参考文档: https://zhuanlan.zhihu.com/p/108447200

