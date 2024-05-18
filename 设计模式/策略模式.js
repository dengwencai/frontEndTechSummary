
function routingJump(route_name) {
  if (route_name === "home") {
    console.log("跳转首页");
  } else if (route_name === "shop") {
    console.log("跳转购物页");
  } else if (route_name === "information") {
    console.log("跳转资讯页");
  } else if (route_name === "main") {
    console.log("跳转我的");
  } else if (route_name === "course") {
    console.log("跳转课程页");
  } else if (route_name === "activity") {
    console.log("跳转活动页");
  } else if (route_name === "help") {
    console.log("跳转帮助页");
  } else {
    console.log("不跳转页面");
  }
}

routingJump("home");

// 单一条件执行结果一致
function routingJump(route_name) {
  const map = {
    home: "跳转首页",
    shop: "跳转购物页",
    information: "跳转资讯页",
    main: "跳转我的",
    course: "跳转课程页",
    activity: "跳转活动页",
    help: "跳转帮助页",
  };

  if (map[route_name]) {
    console.log(map[route_name]);
  } else {
    console.log("不跳转页面");
  }
}

// 单一条件执行结果不一致
function routingJump(route_name) {
  const map = {
    home: () => console.log("跳转首页"),
    shop: () => console.log("生成随机数"),
    information: () => console.log("排序"),
    main: () => console.log("关闭页面"),
    course: () => console.log("打印"),
    activity: () => console.log("监听某些事"),
    help: () => console.log("......"),
  };
  if (map[route_name]) {
    map[route_name](); // <-------------------这里要改为调用函数
  } else {
    console.log("不跳转页面");
  }
}

// 多重条件，执行结果不一致

function routingJump(route_name) {
  const map = [
    [() => route_name.includes("h"), () => console.log("跳转首页")],
    [() => route_name.startsWith("s"), () => console.log("跳转购物页")],
    [() => route_name.endsWith("n"), () => console.log("跳转资讯页")],
    [
      () => route_name.includes("m") && !route_name.includes("d"),
      () => console.log("跳转我的"),
    ],
    [
      () => route_name.includes("a") && route_name.length < 10,
      () => console.log("跳转活动页"),
    ],
  ];
  const targetFn = map.find((item) => item[0]()); //符合条件的目标数组
  if (targetFn) {
    targetFn[1]();
  } else {
    console.log("不跳转页面");
  }
}


// 参考文档：https://juejin.cn/post/7273737312974291004
