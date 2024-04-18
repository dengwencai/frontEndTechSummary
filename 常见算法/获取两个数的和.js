function twoSum(arr,target) {
    let res = []
    outter: for(let i=0;i<arr.length-1;i++){
        const c = arr[i]
        inner: for(let j=i+1;j<arr.length;j++){
            const c1 = arr[j]
            if(c + c1 === target){
                res.push(i,j)
                break outter
            }
        }
    }
    return res
  }

const arr = [1,2,3,4,5]
const target = 5;

const r = twoSum(arr,target)
console.log("%c Line:30 🥔 r", "color:#6ec1c2", r);