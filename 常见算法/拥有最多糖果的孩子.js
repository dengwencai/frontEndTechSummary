// 给你一个数组 candies 和一个整数 extraCandies ，其中 candies[i] 代表第 i 个孩子拥有的糖果数目。

// 对每一个孩子，检查是否存在一种方案，将额外的 extraCandies 个糖果分配给孩子们之后，此孩子有 最多 的糖果。注意，允许有多个孩子同时拥有 最多 的糖果数目。

// 输入：candies = [2,3,5,1,3], extraCandies = 3
// 输出：[true,true,true,false,true]

function kidsWithCandies(nums, n) {
  let max = Math.max(...nums);
  return nums.map((num) => num + n >= max);
}


// var kidsWithCandies = function(candies, extraCandies) {
//     let res = []
//     for(let i=0;i<candies.length;i++){
//         let arr = [...candies];
//         arr[i] = arr[i] + extraCandies;
//         let ismax = (arr[i] === Math.max(...arr))
//         res.push(ismax)
//     }
//     return res
// };



// 分糖果，数组中的每一项代表糖果种类，该小孩只能吃一半的糖果，如何保证吃最多种糖果
// 输入：candyType = [1,1,2,3]
// 输出：2
// 解释：Alice 只能吃 4 / 2 = 2 枚糖，不管她选择吃的种类是 [1,2]、[1,3] 还是 [2,3]，她只能吃到两种不同类的糖。


// 糖果种类m小于可以分的数量时n/2，最多就是糖果种类m，
// 糖果种类m大于分到的数量时，最多就是可以分的数量
var distributeCandies = function(candyType) {
    let m = new Set(candyType); //种类
    let n = candyType.length / 2 //可以分的糖果数量
    return Math.min(m.size,n)
};