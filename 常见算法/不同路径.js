
// 不同路径

// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
// 问总共有多少条不同的路径？

// 输入：m = 3, n = 7
// 输出：28

// 思路：最边上的都只有一条路径，其他的都是上面一个和左边一个的和，使用动态规划

function uniquePaths(m,n){
    let arr = new Array(m).fill(1).map(()=>{
        return new Array(n)
    }).fill(1)

    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            arr[i][j] = arr[i-1][j] + arr[i][j-1]
        }
    }
    return arr[m-1][n-1]
}

// 参考文档：https://leetcode.cn/problems/unique-paths/?envType=study-plan-v2&envId=top-100-liked