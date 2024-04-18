
// 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。

// 输入: nums = [1,2,3,4,5,6,7], k = 3
// 输出: [5,6,7,1,2,3,4]
// 解释:
// 向右轮转 1 步: [7,1,2,3,4,5,6]
// 向右轮转 2 步: [6,7,1,2,3,4,5]
// 向右轮转 3 步: [5,6,7,1,2,3,4]



function rotate(nums,k){
    for(let i=0;i<k;i++){
        let c = nums.pop();
        nums.unshift(c);
    }
}


function rotate1(nums,k){
    let newArr = new Array(nums.length);
    for(let i=0;i<nums.length;i++){
        newArr[(i+k)%nums.length] = nums[i];
    }

    for(let i=0;i<nums.length;i++){
        nums[i] = newArr[i]
    }
}

let nums = [1,2,3,4,5,6,7]
let k = 3

rotate(nums,k)


// 参考文档：https://leetcode.cn/problems/rotate-array/description/?envType=study-plan-v2&envId=top-100-liked
