// 查找多个字符串中最长公共前缀
 
 // strs = ['abcdef', 'abdefw', 'abc']
 // 输出：'ab'，若没有找到公共前缀则输出空字符串

function findLongPublicStr(arr){
  let str = '';
  const n = arr.map(item => item.length).sort()[0];
  // 去最小长度，用最小长度的字符串不同组合去匹配
  // 先匹配最小长度字符串的全组合
  for(let i=0;i<n;i++){
    str = str + arr[0][i]//a->ab->abc
    // 只要数组中某一项不是以该字符开头，那么就取上一个回合的结果
    // if(arr.some(item=>!item.startsWith(str))){
    //   return str.slice(0, str.length -1)
    // }
    if(!arr.every((item)=>item.startsWith(str))){
      return str.slice(0, str.length -1)
    }
  }
  return str
}

let arr = ['sabcdef', 'abdefw', 'abc']

let r = findLongPublicStr(arr)
console.log("%c Line:26 🌮 r", "color:#ea7e5c", r);