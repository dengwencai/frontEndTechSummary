
// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
// 请必须使用时间复杂度为 O(log n) 的算法。
 
// 示例 1:
// 输入: nums = [1,3,5,6], target = 5
// 输出: 2

var searchInsert = function (nums, target) {
    let left = 0,
      right = nums.length - 1;
    while (left <= right) {
      let minIndex = Math.floor((left + right) / 2);
      let minVal = nums[minIndex];
      if (target < minVal) {
        right = minIndex - 1;
      } else {
        left = minIndex + 1;
      }
    }

    if(nums[right] === target){
      return right
    }
    return left
  };

  let nums = [1,3,5,6];
  let target = 5;

  const r = searchInsert(nums, target);
  console.log("%c Line:28 🥐 r", "color:#ea7e5c", r);


//   参考文档：https://leetcode.cn/problems/search-insert-position/description/?envType=study-plan-v2&envId=top-100-liked