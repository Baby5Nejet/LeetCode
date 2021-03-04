// https://leetcode-cn.com/problems/add-two-numbers/submissions/
// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[7,0,8]
// 解释：342 + 465 = 807.

const { createSourceEventStream } = require("graphql");

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
var l1 = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
var l2 = [5,6,4]
// 输出：[8,9,9,9,0,0,0,1]
var addTwoNumbers = function(l1, l2) {
   let num1 = JSON.stringify(l1).match(/\d/g).reverse().join('')
   let num2 = JSON.stringify(l2).match(/\d/g).reverse().join('')
   let sum = BigInt(num1)+BigInt(num2)
   let arr = [...sum.toString()]
   console.log(sum,num1,num2)
   let res = arr.reduce((total,cur)=>{
      return {
         data:cur,
         next:total
      }
   },null)
   console.log(res)
   return res
};
addTwoNumbers(l1,l2)   
