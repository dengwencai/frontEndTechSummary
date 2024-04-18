
// 获取字符串中每个字符出现的次数
function getStrCount(str){
    let temp = str.split('');
    let obj = {}
    temp.forEach(item=>{
        if(obj[item]){
            obj[item] = obj[item]+1 
        }else{
            obj[item] = 1
        }
    })
    return obj
}



const str = 'asdadadwwweqq'
const result = getStrCount(str)
console.log("%c Line:18 🥕 result", "color:#4fff4B", result);