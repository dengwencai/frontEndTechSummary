// 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

// 输入：nums = [0,3,7,2,5,8,4,6,0,1]
// 输出：9

var longestConsecutive = function (nums) {
  let arr = nums.sort((a, b) => a - b);
  let maxLength = 0;
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    // 默认每个值连续都是1，如果前面存在值，那么连续加1
    obj[arr[i]] = obj[arr[i] - 1] + 1 || 1;
  }

  if (Object.values(obj).length > 0) {
    maxLength = Math.max(...Object.values(obj));
  }

  return maxLength;
};

let nums = [];
let r = longestConsecutive(nums);
console.log("%c Line:37 🍤 r", "color:#7f2b82", r);


// 参考文档：https://leetcode.cn/problems/longest-consecutive-sequence/description/?envType=study-plan-v2&envId=top-100-liked
