// 斐波那契数列
// 1、1、2、3、5、8、13、21、34
// 即第一项 f(1) = 1,第二项 f(2) = 1.....,第 n 项目为 f(n) = f(n-1) + f(n-2)。求第 n 项的值是多少。

function fibo(n){
    if(n === 1 || n === 2) return 1
    return fibo(n-2) + fibo(n-1)
}


// 动态规划特点：自下而上，性能更高
// 递归特点：自上而下，重复计算

function fibDP(n){
    let arr = [1,1];
    for(let i=2;i<n;i++){
        arr[i] = arr[i-1] + arr[i-2]
    }
    return arr[arr.length -1]
}

const result = fibo(3)
console.log("%c Line:11 🥝 result", "color:#ed9ec7", result);


// 参考文档：https://www.xjx100.cn/news/152251.html?action=onClick
