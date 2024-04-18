// 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

// 返回 滑动窗口中的最大值

// 输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
// 输出：[3,3,5,5,6,7]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 方法1
var maxSlidingWindow = function (nums, k) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let c = nums.slice(i, i + k);
    if (c.length < k) {
      break;
    }
    res.push(Math.max(...c));
  }
  return res;
};


function maxSlidingWindow1(nums,k){
    let res=[],
    arr=[]//永远都是k位数,满足条件时，判断完就删除
    for(let i=0;i<nums.length;i++){
        arr.push(nums[i]);
        if(i>=k-1){
            res.push(Math.max(...arr))
            // 每次比较完毕就删掉
            arr.shift()
        }
    }
    return res
}

let nums = [1, 3, -1, -3, 5, 3, 6, 7, 8];
// [1,3,-1]
// [3,-1,-3]
// [-1,-3,5]
// [-3,5,3]
// [5,3,6]
// [3,6,7]
let r = maxSlidingWindow(nums, 3);
console.log("%c Line:27 🍓 r", "color:#ea7e5c", r);




// 参考文档：
// 方法1:https://leetcode.cn/problems/sliding-window-maximum/solutions/237158/javascriptjie-leetcodehua-dong-chuang-kou-zui-da-z/?envType=study-plan-v2&envId=top-100-liked
// 方法2:https://leetcode.cn/problems/sliding-window-maximum/submissions/?envType=study-plan-v2&envId=top-100-liked