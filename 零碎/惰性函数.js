
// 当函数第一次被调用时，它会进行必要的初始化，并可能根据条件定义一个新的、更高效的函数来替代自己。对于后续的调用，这个新函数将直接执行，从而避免了重复的初始化工作。

const copyText = (text)=>{
    if(navigator.clipboard){
        copyText = (text)=>{
            navigator.clipboard.writeText(text)
        }
    }else{
        copyText = function(text){
            const input = document.createElement('input');
            input.value = text;
            document.body.appendChild(input);
            input.select();
            document.execCommand('copy');
            document.body.removeChild(input);
        };
    }
    copyText(text)
}