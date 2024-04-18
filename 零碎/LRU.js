var LRUCache = function(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
};

LRUCache.prototype.get = function(key) {
if(this.cache.has(key)) {
  let temp = this.cache.get(key);
  this.cache.delete(key);
  this.cache.set(key, temp);
  return temp;
}
return -1;
}

LRUCache.prototype.put = function(key, value) {
if(this.cache.has(key)) {
  this.cache.delete(key);
} else if(this.cache.size >= this.capacity) {
  this.cache.delete(this.cache.keys().next().value);
};
this.cache.set(key, value);
}


// 参考文档:https://zhuanlan.zhihu.com/p/425216156
// https://zhuanlan.zhihu.com/p/378782266?utm_id=0