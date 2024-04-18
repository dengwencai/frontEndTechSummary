// 1.
// function formatNumber (n){
//     return n.toLocaleString();

// }

// 2.
function formatNumber(n){
    let num = n.toString() // 转成字符串
    let decimals = '' //小数
    let main =  num.split('.')[0]
        // 判断是否有小数
    num.indexOf('.') > -1 ? decimals = num.split('.')[1] : decimals
    let len = main.length;

    if (len <= 3) {
        return num
    } else {
        let temp = ''//拼上.的小数
        let remainder = len % 3 // 取余
        decimals ? temp = '.' + decimals : temp
        if (remainder > 0) { // 不是3的整数倍
            return num.slice(0, remainder) + ',' + num.slice(remainder, len).match(/\d{3}/g).join(',') + temp
        } else { // 是3的整数倍
            return num.slice(0, len).match(/\d{3}/g).join(',') + temp
        }
    }
}

// 3.
// function formatNumber(n) {
//   const num = n.toString();
//   let intNumber = ''; //正数
//   let decimals = ""; //小数

//   if (num.includes(".")) {
//     intNumber = num.split('.')[0]
//     decimals = num.split(".")[1];
//   }else{
//     intNumber = num;
//   }
//   const temp = intNumber.split('').reverse();

//   let arr = []
//   for(let i=0;i<temp.length;i+=3){
//     arr.push(temp.slice(i,i+3))
//   }

//   let temp1 = ''
//   for(let i=arr.length-1;i>=0;i--){
//     temp1 = temp1 +(temp1 ? ',' : '')+arr[i].reverse().join('')
//   }

//   const la = decimals.length > 0 ? ('.' + decimals) : decimals

//   return temp1 + la
// }

var b = 12321312223.1;
const result = formatNumber(b);

console.log("%c Line:4 🥑 result", "color:#f5ce50", result);
