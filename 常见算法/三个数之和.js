
function threeSum(nums,target) {
    let res = [];
    outter:for (let i = 0; i < nums.length - 2; i++) {
      middle:for (let j = i+1; j < nums.length - 1; j++) {
        inner:for (let k = j+1; k < nums.length; k++) {
          if(nums[i] + nums[j] + nums[k] === target){
            res.push([nums[i],nums[j],nums[k]]);
          }
        }
      }
    }
    return res
  }

  const arr = [-1,0,1,2,-1,-4];
  const r =  threeSum(arr,1);
  console.log(r)