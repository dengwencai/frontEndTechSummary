// sleep是一种函数，他的作用是使程序暂停指定的时间，起到延时的效果。

// 1. 过死循环来阻止代码执行，同时不停比对是否超时
// function sleep(time){
//     const timeStamp = new Date().getTime();
//     while(true){
//         // 如果超时，跳出循环，这里可以使用return和break跳出循环
//         if(new Date().getTime() - timeStamp > time){
//             return
//         }
//     }
// }

// console.time('runTime:');

// sleep(2000);
// console.log('1');
// sleep(3000);

// console.log('1');

// console.timeEnd('runTime:');

// 2. 基于async函数的sleep
function sleep(time){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve()
        },time)
    })
}


async function run(){
    console.time('runTime:');
    console.log('1');
    await sleep(2000);
    console.log('2');
    await sleep(1000);
    console.log('3'); 
    console.timeEnd('runTime:');
}

run()


