// https://leetcode-cn.com/problems/add-two-numbers/submissions/
// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[7,0,8]
// 解释：342 + 465 = 807.

// 输入：l1 = [0], l2 = [0]
// 输出：[0]

// 输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// 输出：[8,9,9,9,0,0,0,1]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
//  */
//  * @param {ListNode} l1
//  * @param {ListNode} l2‘
//  * @return {ListNode}

// [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
// [5,6,4]
// [6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
var arr1 = [2,4,3]
var arr2 = [5,6,4]
// 输出：[7,0,8]   342+465 = 807
function arry2node(arr){
   let res = arr.reverse().reduce((total,cur)=>{
      return {
         val:cur,
         next:total
      }
   },null)
   return res
}
function ListNode(val, next) {
   this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
}
var addTwoNumbers = function(arr1, arr2) {
var l1 = arry2node(arr1)
var l2 = arry2node(arr2)
// console.log(l1,l2)
let addOne = 0
let sum = new ListNode('0')
let head = sum
while (addOne || l1 || l2) {
    let val1 = l1 !== null ? l1.val : 0
    let val2 = l2 !== null ? l2.val : 0
    let r1 = val1 + val2 + addOne
    addOne = r1 >= 10 ? 1 : 0
    sum.next = new ListNode(r1 % 10)
    console.log(sum,sum.next)
    sum = sum.next 
    if (l1) l1 = l1.next 
    if (l2) l2 = l2.next 
}
return head.next

};
addTwoNumbers(arr1,arr2)   
