
// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:
// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:
// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:
// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
// 示例 4:
// 输入: s = ""
// 输出: 0
 

// 提示：
// 0 <= s.length <= 5 * 104
// s 由英文字母、数字、符号和空格组成

//  * @param {string} s
//  * @return {number}
// var s = "pwwkew"
var s = "nfpdmpi"
var lengthOfLongestSubstring = function(s) {
  if(s.length === 0){
    return 0
  }
  let arr = [...s]
  // console.log(arr)
  let res = []
  let result = 0
  for(let n = 0;n<arr.length;n++){
     res[n] = [arr[n]]
    for(let m=n;m<arr.length;m++){
      let a = res[n].some(el=>{
        return el === arr[m+1]
      })
      if(!a && arr[m+1]){
        res[n].push(arr[m+1])
      }else{
        break
      }
    }
    if(n === 0){
      result = res[n]
    }else{
      result = res[n].length > result.length ? res[n] : result
    }
  }
  console.log(res)
  console.log('result',result)
  return result.length
};
lengthOfLongestSubstring(s)