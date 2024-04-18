const arr = [
  {
    id: 2,
    name: "部门B",
    parentId: 0,
  },
  {
    id: 3,
    name: "部门C",
    parentId: 1,
  },
  {
    id: 1,
    name: "部门A",
    parentId: 2,
  },
  {
    id: 4,
    name: "部门D",
    parentId: 1,
  },
  {
    id: 5,
    name: "部门E",
    parentId: 2,
  },
  {
    id: 6,
    name: "部门F",
    parentId: 3,
  },
  {
    id: 7,
    name: "部门G",
    parentId: 2,
  },
  {
    id: 8,
    name: "部门H",
    parentId: 4,
  },
];

/**
 * 数组转树形结构
 * @param {array} list 被转换的数组
 * @param {number|string} root 根节点（最外层节点）
 * @returns array
 */
function arrayToTreeV3(list, root) {
    return list
      .filter(item => item.parentId === root)
      .map(item => ({ ...item, children: arrayToTreeV3(list, item.id) }))
  }

const result = arrayToTreeV3(arr, 0)
console.log("%c Line:56 🍿 result", "color:#b03734", result);

// 参考文档：https://www.jianshu.com/p/36c5e4b49ac9