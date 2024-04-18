
// 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
// 在「杨辉三角」中，每个数是它左上方和右上方的数的和。

// let arr = [
//     [1],
//     [1, 1],
//     [1, 2, 1],
//     [1, 3, 3, 1],
//     [1, 4, 6, 4, 1]
// ]

function generateTriangle(numsRows){
    let res = []
    for(let i=0;i<numsRows;i++){
        let row = new Array(i+1).fill(1);//每一行都是1，第一个和最后一个数字是1，其他需要动态修改
        for(let j=1;j<row.length-1;j++){
            row[j] = res[i-1][j-1] + res[i-1][j]
        }
        res.push(row)
    }
    return res
}

// 参考文档：https://leetcode.cn/problems/pascals-triangle/?envType=study-plan-v2&envId=top-100-liked