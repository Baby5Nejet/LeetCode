// https://leetcode.cn/problems/kth-largest-element-in-an-array/submissions/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let quickSort = (arr) => {
    if (arr.length <= 1) return arr;
    var leftArr = [];
    var rightArr = [];
    var pivot = Math.round(arr.length / 2);
    var baseNum = arr.splice(pivot, 1);
    arr.forEach(function (num) {
      if (num > baseNum) {
        leftArr.push(num);
      } else {
        rightArr.push(num);
      }
    });
    return quickSort(leftArr).concat(baseNum, quickSort(rightArr));
  }
  let res = quickSort(nums)
  return res[k - 1]
};