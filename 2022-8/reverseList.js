// 翻转链表
// https://leetcode.cn/problems/reverse-linked-list/
var reverseList = function(head) {
  let res = null
  const scan = (prefix)=>{
    if(prefix == null ||prefix.next == null){
         res = prefix
     
    }else{
    scan(prefix.next)
      prefix.next.next = prefix
      prefix.next = null
      
    }
  }
  scan(head)
  return res
}