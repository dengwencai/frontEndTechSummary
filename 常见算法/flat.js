
function flattenArray(arr){
    if(!Array.isArray(arr)){
        return arr
    }
    let result = [];
    arr.forEach((item)=>{
        if(Array.isArray(item)){
            result = result.concat(flattenArray(item))
        }else{
            result.push(item)
        }
    })
    return result
}


const array = [[1,23,3],[1,[2]]];

const r = flattenArray(array);
console.log("%c Line:21 🥚 r", "color:#ea7e5c", r);

