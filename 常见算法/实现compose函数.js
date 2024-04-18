var greeting = (firstName, lastName) => 'hello, ' + firstName + ' ' + lastName
var toUpper = str => str.toUpperCase()
var fn = compose(toUpper, greeting);
console.log(fn('jack', 'smith'));

// ‘HELLO，JACK SMITH’

// 函数组合：可以接受任意的参数，所有的参数都是函数，且执行方向是自右向左的，
// 除了第一个函数的接受参数，其他函数的接受参数都是上一个函数的返回值
// 返回一个函数
function compose(...funcs){
    let length = funcs.length;
    if(length === 0){
        return (...args)=>args
    }
    if(length === 1){
        return funcs[0]
    }
    return funcs.reduce((t,current)=>{
        return (...args)=>{
            return t(current(...args))
        }
    })
}


// 参考文档：https://www.cnblogs.com/beileixinqing/p/16611509.html