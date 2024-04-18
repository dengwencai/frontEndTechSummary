// 删除字符串中出现次数最少的字符，并且不改变原来字符串的顺序

// todo 1.统计出字符串中每个字符出现的次数
function removeLeastStr(str){
    let obj = {}; //这里obj是一个使用字符作为key，出现次数作为value的对象
    str.split('').forEach(item=>{
        if(obj[item]){
            obj[item] = obj[item] + 1
        }else{
            obj[item] = 1
        }
    })

    console.log("%c Line:6 🥟 obj", "color:#2eafb0", obj);
    // 找出次数最少的字符串
    const min = Math.min(...Object.values(obj))

    // 删除最小次数的字符
    for(let key in obj){
        if(obj[key] === min){
            delete obj[key]
        }
    }

    let result = []// 最终的数组
    // 遍历原来的字符串，按照顺序拼接
    str.split('').forEach(item=>{
        if(obj[item]){
            result.push(item)
        }
    })
    return result.join('')
}

const result = removeLeastStr('asdasdasdad')
console.log("%c Line:36 🍇 result", "color:#f5ce50", result);


// 参考文档：https://fe.ecool.fun/topic-answer/0003100e-5f40-499e-9e00-8bbbc5e90976