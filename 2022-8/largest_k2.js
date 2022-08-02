// https://leetcode.cn/problems/kth-largest-element-in-an-array/
// 冒泡排序
const arr = [3, 2, 3, 1, 2, 4, 5, 5, 6]
const k = 4
let newarr = arr.sort((a, b) => {
  return b - a
})
console.log(newarr[k - 1])