
// 异或运算特点
// 1. a⊕0 = a
// 2. a⊕a = 0
// 3. a⊕b⊕a = (a⊕a)⊕b = 0⊕b = b

// todo 给你一个 非空 整数数组 nums ，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

var singleNumber = function(nums) {
    return nums.reduce((t,c)=>{
      return t^c
    })
  };





// 参考文档：https://leetcode.cn/problems/single-number/solutions/10261/hua-jie-suan-fa-136-zhi-chu-xian-yi-ci-de-shu-zi-b/?envType=featured-list&envId=2cktkvj%3FenvType%3Dfeatured-list&envId=2cktkvj