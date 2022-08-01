// https://leetcode.cn/problems/longest-substring-without-repeating-characters/submissions/
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  const arr = s.split('')
  let res = ''
  if(arr.length < 2) return s.length
  for (let i=0; i < arr.length; i++) {
    let list = arr[i]
    for (let j=1+i; j < arr.length; j++) {
     if(list.indexOf(arr[j]) < 0){
          list = list + arr[j]
          res = res.length > list.length ? res : list
        }else{
            res = res.length > list.length ? res : list
          list = ''
          break        
        }
    }
  }
  return res.length
  };