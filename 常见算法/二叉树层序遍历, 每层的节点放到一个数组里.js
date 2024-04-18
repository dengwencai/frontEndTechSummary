function TreeNode(val, left, right){
    this.value = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var levelOrder = function(root) {
    let res = [];
    if(!res) return res;
    // 创建一个队列，把根元素放进去，代表需要处理每级的节点，队列前面是叶子节点，
    // 后面是根节点，每次有新的从前面插入，每次循环从后面取，用完就删掉
    let queue = [root];
    // 只要队列中有元素，继续循环
    while(queue.length){
      // 用来存放每一层的节点的值
      let level = [];
      // 每一层的节点数，当前队列中的节点都是上一层的子节点，这里必须提前申明
      let len = queue.length;
      // 遍历每一层的节点
      for(let i=0; i< len; i++){
            // 弹出队列最后一个节点
            let node = queue.pop();
            level.push(node.value);
            // 二叉树：如果有左子节点或右子节点，把子节点放入队列最前面，等待下一次遍历
            if(node.left){
                queue.unshift(node.left);
            }
            if(node.right){
                queue.unshift(node.right);
            }
        }
        // 同一层的节点遍历结束
        res.push(level);
    }
    return res;
};

const target = {
    value: 3,
    left: {
      value: 9,
      left: {
        value: 15,
        left: null,
        right: null,
      },
      right: {
        value: 7,
        left: null,
        right: null,
      },
    },
    right: {
      value: 20,
      left: {
        value: 15,
        left: null,
        right: null,
      },
      right: {
        value: 7,
        left: null,
        right: null,
      },
    },
  };
  
// 二叉树：[3,9,20,null,null,15,7]
// let tree = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
let result = levelOrder(target)

console.log(result);