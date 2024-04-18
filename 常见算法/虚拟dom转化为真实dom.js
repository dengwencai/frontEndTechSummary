let vNode = {
  key: "",
  $$typeof: Symbol(),
  type: "DIV",
  ref: null,
  props: {
    children: [{
        key: "",
        $$typeof: Symbol(),
        type: "p",
        ref: null,
        props: {
          children: [],
          className: "sub",
          onChange: () => {},
        },
    }],
    className: "container",
    onChange: () => {},
  },
};

function _render(vNode) {
  if (typeof vNode === "number") {
    vNode = String(vNode);
  }
  if (typeof vNode === "string") {
    return document.createTextNode(vNode);
  }
  //创建普通的dom
  let dom = document.createElement(vNode.type);
  if (vNode.props) {
    const {children, ...rests} = vNode.props
    Object.keys(rests).forEach((key) => {
      const attr = vNode.props[key];
      dom.setAttribute(key, attr);
    });
  }
  vNode?.props?.children?.forEach((tag) => dom.appendChild(_render(tag)));
  return dom;
}

console.log(_render(vNode))


// 参考文档：https://blog.csdn.net/Lcyj9994399/article/details/128678518
