
// 二分搜索，也叫折半搜索，是一种在有序数组中查找特定元素的搜索算法，所以前提，数组一定是有序

function binarySearch01(arr, target) {
  const len = arr.length;
  if (len === 0) return -1;

  let startIndex = 0;
  let endIndex = len - 1;

  while (startIndex <= endIndex) {
    const midIndex = Math.floor((startIndex + endIndex) / 2); // 将数字向下舍入到最接近的整数
    const midValue = arr[midIndex];

    if (target < midValue) {
      // 目标值较少，则继续在左侧查找
      endIndex = midIndex - 1;
    } else if (target > midValue) {
      // 目标值较大，则继续在右侧查找
      startIndex = midIndex + 1;
    } else {
      return midIndex;
    }
  }
  
  return -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const result = binarySearch01(arr, 5);
console.log("%c Line:27 🥒 result", "color:#f5ce50", result);
