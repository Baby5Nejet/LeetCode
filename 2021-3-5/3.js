// https://leetcode-cn.com/problems/longest-palindromic-substring/submissions/
// 给你一个字符串 s，找到 s 中最长的回文子串。

// 示例 1：
// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。
// 示例 2：
// 输入：s = "cbbd"
// 输出："bb"
// 示例 3：
// 输入：s = "a"
// 输出："a"
// 示例 4：
// 输入：s = "ac"
// 输出："a"

// 提示：
// 1 <= s.length <= 1000
// s 仅由数字和英文字母（大写和/或小写）组成
//  * @param {string} s
//  * @return {string}
let s = 'fdgdfaeff'
// let s = "babad"
var longestPalindrome = function(s) {
  let list = [...s]
  // console.log(list)
  let result = list[0]
  console.log('length',list,result,list.length ===1)
  if(list.length===1){
    console.log('111',result)
    return result
  }else{
    for(let m = 0;m<list.length;m++){
      for(let n = list.length-1;n>m;n--){
        if(list[m] === list[n]){
          let a = list.slice(m,n+1)
          let x = a.join('')
          let y = a.reverse().join('')
          console.log('222222',x,y,x===y,a)
          if(x===y && x.length > result.length){
              result = x
              break
          }
          // result = x===y && x.length > result.length ? x break : result
        }
      }
    }
  }
  console.log('44444',result)
  return result
};
longestPalindrome(s)