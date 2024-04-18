// 岛屿数量
// 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

// 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

// 此外，你可以假设该网格的四条边均被水包围。

// 示例 1：

// 输入：grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// 输出：1

function numsLangds(grid) {
  let count = 0;

  function setZero(i, j) {
    grid[i][j] = 0;
    // 上
    if (i - 1 >= 0 && grid[i - 1][j] == 1) {
      setZero(i - 1, j);
    }
    // 下
    if (i + 1 < grid.length && grid[i + 1][j] == 1) {
      setZero(i + 1, j);
    }
    // 左
    if (j - 1 >= 0 && grid[i][j - 1] == 1) {
      setZero(i, j - 1);
    }
    // 右
    if (j + 1 < grid[i].length && grid[i][j + 1] == 1) {
      setZero(i, j + 1);
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 1) {
        setZero(i, j);
        count++;
      }
    }
  }
  return count;
}


// 参考文档：https://leetcode.cn/problems/number-of-islands/submissions/498811048/?envType=study-plan-v2&envId=top-100-liked