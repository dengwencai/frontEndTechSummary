// 和为 K 的子数组

// 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。

// 子数组是数组中元素的连续非空序列。

// 示例 1：

// 输入：nums = [1,1,1], k = 2
// 输出：2


// 思路：考虑以i结尾和为k的连续子数组个数，我们需要统计符合条件的下标j的个数，其中 0≤j≤i 且 [j..i] 这个子数组的和恰好为 k。

function subarraySum(nums,k){
    let count = 0
    for(let i=0;i<nums.length;i++){
        let sum = 0
        for(let j= i;j>=0;j--){
            sum +=nums[j]
            if(sum === k){
                count++
            }
        }
    }
    return count
}

// 参考文档：https://leetcode.cn/problems/subarray-sum-equals-k/solutions/238572/he-wei-kde-zi-shu-zu-by-leetcode-solution/?envType=study-plan-v2&envId=top-100-liked