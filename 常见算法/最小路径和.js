
// 最小路径和
// 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
// 说明：每次只能向下或者向右移动一步。

// 输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
// 输出：7
// 解释：因为路径 1→3→1→1→1 的总和最小。


function minPathSum(grid){
    let m = grid.length
    let n = grid[0].length

    // 第一列中每项都是前一项+当前项的值
    for(let i=1;i<m;i++){
        grid[i][0] += grid[i-1][0]
    }

    // 第一行每项都是前项+当前项的值
    for(let j=1;j<n;j++){
        grid[0][j] += grid[0][j-1]
    }

    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            grid[i][j] += Math.min(grid[i-1][j], grid[i][j-1])
        }
    }

    return grid[m-1][n-1]
}


// 参考文档：https://leetcode.cn/problems/minimum-path-sum/submissions/500575507/?envType=study-plan-v2&envId=top-100-liked