// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
// 请注意 ，必须在不复制数组的情况下原地对数组进行操作。


var moveZeroes = function(nums) {
    let len = nums.length;
    for(let i=len-1;i>=0;i--){
        const c = nums[i];
        if(c === 0){
           nums.push(0);
           nums.splice(i,1)
        }
    }
    return nums
};

const nums = [0,1,0,3,12]
const r = moveZeroes(nums)
console.log("%c Line:19 🍏 r", "color:#3f7cff", r);

// 输入: nums = [0,1,0,3,12]
// 输出: [1,3,12,0,0]
