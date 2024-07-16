
// 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。

// 输入：root = [4,2,7,1,3,6,9]
// 输出：[4,7,2,9,6,3,1]

// let tree = {
//     val: 4,
//     left: {
//       val: 2,
//       left: {
//         val: 1,
//       },
//       right: {
//         val: 3,
//       },
//     },
//     right: {
//       val: 7,
//       left: {
//         val: 6,
//       },
//       right: {
//         val: 9,
//       },
//     },
//   };
// 翻转二叉树
function dfs(root){
    function transfer(node){
        if (!node.left || !node.right) return;
        let temp = node.left;
        node.left = node.right
        node.right = temp
        transfer(node.left);
        transfer(node.right);
    }
    transfer(root)
    return root
}

// 参考文档：https://leetcode.cn/problems/invert-binary-tree/?envType=study-plan-v2&envId=top-100-liked

// 给你一个二叉树的根节点 root ， 检查它是否轴对称。
// 对称二叉树
function isSymmetric(root){
    function issame(l,r){
        if(l === null || r === null){
            return l === r
        }
        return l.val === r.val && issame(l.left,r.right) && issame(l.right,r.left)
    }
    return issame(root.left,root.right)
}

// 参考文档：https://leetcode.cn/problems/symmetric-tree/description/?envType=study-plan-v2&envId=top-100-liked
