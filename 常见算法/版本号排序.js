
// 给定版本号['0.1.1', '2.3.3', '0.3002.1', '4.2', '4.3.5', '4.3.4.5']，输出版本号从小到大排序的结果。

function sortVersion(list) {
    return list.sort((v1,v2)=>{
      let arr1 = v1.split('.').map(item=>item*1);
      let arr2 = v2.split('.').map(item=>item*1);
      let max = Math.max(arr1.length, arr2.length);
      for(let i=0;i<max;i++){
        if(arr1[i] > arr2[i]){
          return 1
        }
        if(arr1[i] < arr2[i]){
          return -1
        }
        return 0
      }
    })
  }

  const versionList = [
    "0.1.1",
    "2.3.3",
    "0.3002.1",
    "4.2",
    "4.3.5",
    "4.3.4.5",
  ];

  sortVersion(versionList)
  console.log(sortVersion(versionList));