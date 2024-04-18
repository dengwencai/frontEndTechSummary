// 给几个数组, 可以通过数值找到对应的数组名称

// 比如这个函数输入一个1，那么要求函数返回A
const A = [1, 2, 3];
const B = [4, 5, 6];
const C = [7, 8, 9];

function getFnName(val) {
    let obj = {A,B,C}
    for(let key in obj){
        for(let item of obj[key]){
            if(item === val){
                return key
            }
        }
    }
}

const result = getFnName(5)
console.log("%c Line:18 🍆 result", "color:#93c0a4", result);
