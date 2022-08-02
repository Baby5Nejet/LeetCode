// https://leetcode.cn/problems/kth-largest-element-in-an-array/
const arr = [3, 2, 3, 1, 2, 4, 5, 5, 6]
const k = 4
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] < arr[j + 1]) {
      const temp = arr[j]
      arr[j] = arr[j + 1]
      arr[j + 1] = temp
    }
  }
}
console.log(arr[k - 1])