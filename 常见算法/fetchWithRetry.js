async function fetchWithRetry(url,options,retryCount=0){
    try {
       return await fetch(url,options);
    } catch (error) {
        if(retryCount < 3){
            return fetchWithRetry(url,options,retryCount+1)
        }
        throw Error('超出最大次数')
    }
// }


参考文档: https://blog.csdn.net/shadowfall/article/details/127660228