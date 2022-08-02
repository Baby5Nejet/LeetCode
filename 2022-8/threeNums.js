// https://leetcode.cn/problems/3sum/

nums = [-1, 0, 1, 2, -1, -4]
var threeSum = function (nums) {

  let arr = nums.sort((a, b) => {
    return a - b
  })
  let res = []
  console.log(arr)
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] === arr[i - 1]) {
      continue
    }
    let target = arr[i]
    let left = i + 1
    let right = arr.length - 1
    while (left < right) {
      let sum = target + arr[left] + arr[right]
      if (sum === 0) {
        res.push([target, arr[left], arr[right]])
        while (left < right && nums[left + 1] == nums[left]) left++
        while (left < right && nums[right - 1] == nums[right]) right--
        left++
        right--
      } else if (sum > 0) {
        right--
      } else {
        left++
      }
    }

  }
  return res
};
threeSum(nums)

