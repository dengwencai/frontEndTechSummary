// 给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 
// 输入：matrix = [[1,1,1],[1,0,1],[1,1,1]]
// 输出：[[1,0,1],[0,0,0],[1,0,1]]

// 1  1  1
// 1  0  1
// 1  1  1

// 第二行，第二列存在0，那么第二行的数组全部改为0，所有行的数组的第二列全部改为0


function setZeroes(arr){
    let indexList = [];
    arr.forEach((item1,index1)=>{
        // index1：代表第几行
        // index2：代表第几列
        item1.forEach((item2,index2)=>{
            if(item2 === 0){
                indexList.push([index1,index2])
            }
        })
    })

    indexList.forEach((item3,index3)=>{
        // item3[0]--->行
        // item3[1]--->列
        // 指定行的数组全部改为0
        arr[item3[0]].forEach((item4,index4)=>{
            arr[item3[0]].splice(index4,1,0)
        })

        // 所有行的数组指定的列都改为0
        arr.forEach((item5,index5)=>{
            arr[index5].splice(item3[1],1,0)
        })
    })
}


// 参考文档：https://leetcode.cn/problems/set-matrix-zeroes/solutions/1733576/zuo-biao-fa-by-elated-shockleygei-xtle/?envType=study-plan-v2&envId=top-100-liked