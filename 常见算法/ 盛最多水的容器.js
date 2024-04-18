
// 盛最多水的容器

// 输入：[1,8,6,2,5,4,8,3,7]
// 输出：49 
// 解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。

function maxArea(height){
    let left=0,right=height.length -1,ans=0;
    while(left < right){
        let area = (right-left) * Math.min(height[left],height[right]);
        ans = Math.max(ans,area);
        if(height[left] < height[right]){
            left++
        }else{
            right--
        }
    }
    return ans
}
const arr = [1,8,6,2,5,4,8,3,7];

const r = maxArea(arr)
console.log("%c Line:23 🥥 r", "color:#2eafb0", r);