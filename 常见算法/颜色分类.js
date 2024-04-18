// 颜色分类

// 给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

// 我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

// 必须在不使用库内置的 sort 函数的情况下解决这个问题。

// 示例 1：

// 输入：nums = [2,0,2,1,1,0]
// 输出：[0,0,1,1,2,2]


var sortColors = function(nums) {
    let len = nums.length;
        for (let i = 0; i < len; i++) {
          if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.unshift(0);
          }
      };

      for (let i = len-1; i >=0; i--) {
          if (nums[i] === 2) {
            nums.splice(i, 1);
            nums.push(2);
          }
        }
};

// 参考文档：https://leetcode.cn/problems/sort-colors/submissions/499149810/?envType=study-plan-v2&envId=top-100-liked