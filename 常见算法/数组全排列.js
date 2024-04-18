/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 给定一个不含重复数字的数组 nums ，返回其所有可能的全排列 。你可以按任意顺序，返回答案。
// 回溯法
// 结束条件；可选条件
var permute = function (nums) {
    if (!nums.length) return
    let res = []
    let backTrack = path => {
        //长度满足条件，加入结果
        if (path.length === nums.length) {
            res.push([...path]);
            return
        }
        for(let i=0;i<nums.length;i++){
            if(path.includes(nums[i])) continue;
            path.push(nums[i]);
            backTrack(path)
            path.pop()
        }
        // nums.forEach(item => {
        //     if (path.includes(item)) return //不包含重复的数字
        //     backTrack([...path, item]) //加入路径，继续递归选择
        // });
    }
    backTrack([])
    return res
};

const arr = [1,2,3,4,5];

console.log(permute(arr))