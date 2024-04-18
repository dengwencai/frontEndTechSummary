// 假如楼梯有 n 个台阶，每次可以走 1 个或 2 个台阶，请问走完这 n 个台阶有几种走法

// 1-1,2-2,3-3,4-5,5-8

// 递归
function climbLadder(n) {
    if(n === 1) return 1
    if(n === 2) return 2
    return climbLadder(n-1) + climbLadder(n - 2)
}

// 动态规划法
function clinb(n) {
    let res = [1, 2];
    for (let i = 2; i < n; i++) {
        res[i] = res[i-1] + res[i-2]
    }
    return res[res.length-1]
  }

const result = climbLadder(5);
console.log("%c Line:12 🍢 result", "color:#33a5ff", result);