// 选择排序，每次循环都找出当前项和剩下的数字进行比较，确定一个最小值
var array = [10, 20, 9, 8, 79, 65];

function selectSort(arr) {
  let newArr = [...arr];
  let len = newArr.length;
  let minIndex, temp;
  for (let i = 0; i < len - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (newArr[j] < newArr[minIndex]) {
        minIndex = j;
      }
    }
    // 每次拿到最小索引后 交换arr[i]和arr[minIndex]位置
    temp = newArr[i];
    newArr[i] = newArr[minIndex];
    newArr[minIndex] = temp;
  }
  return newArr;
}

let res = selectSort(array);
console.log("array", array);
console.log("res", res);

// 冒泡排序
var array = [10, 20, 9, 8, 79, 65];

// 每次找出最大值，并放在最右边
function bubbleSort(arr) {
  var newArr = [...arr];
  var len = newArr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (newArr[j] > newArr[j + 1]) {
        let temp = newArr[j];
        newArr[j] = newArr[j + 1];
        newArr[j + 1] = temp;
      }
    }
  }
  return newArr;
}

res = bubbleSort(array);
console.log("array", array);
console.log("res", res);

// 快速排序
function quickSort(list) {
  if (list.length <= 1) {
    return list;
  }

  let left = [],
    right = [],
    midd = list[0];

  for (let i = 1; i < list.length; i++) {
    if (list[i] < midd) {
      left.push(list[i]);
    } else {
      right.push(list[i]);
    }
  }
  return [...quickSort(left), midd, ...quickSort(right)];
}

const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];

let r = quickSort(arr);
console.log("%c Line:37 🍫 r", "color:#ffdd4d", r);


// 插入排序
function insertSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
r = insertSort(arr);
console.log("%c Line:25 🥔 r", "color:#7f2b82", r);
