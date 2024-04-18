const bst = {
  value: 5,
  left: {
    value: 3,
    left: {
      value: 2,
      left: null,
      right: null,
    },
    right: {
      value: 4,
      left: null,
      right: null,
    },
  },
  right: {
    value: 7,
    left: {
      value: 6,
      left: null,
      right: null,
    },
    right: {
      value: 8,
      left: null,
      right: null,
    },
  },
};

// 前序遍历：当前节点的值 左 右
// 中序遍历：左 当前节点的值 右
// 后序遍历：左 右 当前节点的值

/**
 * @description: dfs  TC:O(n)  SC:O(1)
 * @author: JunLiangWang
 * @param {*} root  给定二叉树根节点
 * @return {*}
 */
function dfs(root) {
  /**
   * 该方案使用深度优先的方式，在递归的参数中加入当前节点的层级
   * 每次递归则将层级+1，然后记录最大深度即可。
   */

  // 记录最大深度
  let maxDeep = 0;

  /**
   * @description: 递归实现深度优先
   * @author: JunLiangWang
   * @param {*} root 当前节点
   * @param {*} deep 层级
   * @return {*}
   */
  function recursion(root, deep) {
    // 当前节点为空直接返回
    if (!root) return;
    // 记录最大深度
    if (deep > maxDeep) maxDeep = deep;
    console.log(root.value); //先访问当前节点的值，
    // 继续递归左子树，层级+1.
    recursion(root.left, deep + 1); //再递归遍历左子树
    // 继续递归右子树，层级+1
    recursion(root.right, deep + 1); //再递归遍历右子树
  }
  // 执行递归
  recursion(root, 1);
  // 返回结果
  return maxDeep;
}

const result = dfs(bst);
console.log("%c Line:70 🍒 result", "color:#fca650", result);
