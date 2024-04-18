
function deepClone(target,map=new WeakMap()){
    if(typeof target !== 'object' || target === null){
      return target;
    }
    // let clone = Array.isArray(target) ? [] : {}
    let clone  = new target.constructor()

    // target作为key
    if(map.get(target)){
      return map.get(target)
    }
    
    map.set(target,clone);

    for(let key in target){
      clone[key] = deepClone(target[key],map);
    }
    
    return clone
  }