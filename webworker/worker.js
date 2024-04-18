importScripts('./index.js');
console.log('$===>',a);

self.onmessage = (e) => {
  console.log('$111===>',a);
  console.log("%c Line:2 🍏 val", "color:#ed9ec7", e.data);
  postMessage('子线程向主线程传递的参数')
};
