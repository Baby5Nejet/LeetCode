
// 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。

// 示例 1：
// 输入：nums1 = [1,3], nums2 = [2]
// 输出：2.00000
// 解释：合并数组 = [1,2,3] ，中位数 2
// 示例 2：
// 输入：nums1 = [1,2], nums2 = [3,4]
// 输出：2.50000
// 解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
// 示例 3：
// 输入：nums1 = [0,0], nums2 = [0,0]
// 输出：0.00000
// 示例 4：
// 输入：nums1 = [], nums2 = [1]
// 输出：1.00000
// 示例 5：
// 输入：nums1 = [2], nums2 = []
// 输出：2.00000
// 提示：
// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106
// 进阶：你能设计一个时间复杂度为 O(log (m+n)) 的算法解决此问题吗？

//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number}
// [1,3]
// [2]


let nums1 = [1,2]
let nums2 =[3,4]
var findMedianSortedArrays = function(nums1, nums2) {
var res = nums1.concat(nums2)
var result = 0
var arr = res.sort((a,b)=>{
  if(a===b){return 0 }
  else  if(a>b){return 1}
  else{return -1}
})

len = arr.length 
if(len%2 === 1){
  // 奇
  result = arr[Math.floor(len/2)]
}else{
  // 偶
  let a = parseFloat(arr[Math.floor(len/2)])
  let b = parseFloat(arr[Math.floor(len/2-1)])
  console.log(a,b)
  result = ( a+ b)/2
}
console.log('res',res,arr,result)
return result
};  
findMedianSortedArrays(nums1,nums2)