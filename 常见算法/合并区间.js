var arr = [[1,3], [2,6],[15,18],[8,10],[10,11],[7,8]]

function merge(arr){
    arr.sort((a,b)=>a[0] - b[0]) //每一项首元素进行排序
    let res = [arr[0]] //目标区间数组
    for(let i=1;i<arr.length;i++){
        // 如果当前数组的第一项大于区间数组的最后一项的值，说明不重合
        if(arr[i][0] > res[res.length - 1][1]){
            res.push(arr[i]) 
        }else{
            // 说明存在重合
            // 如果当前数组的第二项大于区间数组的最大值，替换区间数组的最大值
            if(arr[i][1] > res[res.length - 1][1]){
                res[res.length - 1][1] = arr[i][1]
            }
        }
    }
    return res
}

console.log( merge(arr))


// 参考文档：https://leetcode.cn/problems/merge-intervals/solutions/597906/javascriptjie-fa-tong-su-yi-dong-56-he-b-j4vl/?envType=featured-list&envId=2cktkvj%3FenvType%3Dfeatured-list&envId=2cktkvj