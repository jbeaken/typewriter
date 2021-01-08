/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// 342 and 465
var num1_1 = new ListNode(3, null);
var num1_2 = new ListNode(4, num1_1);
var num1_3 = new ListNode(2, num1_2);

var num2_1 = new ListNode(4, null);
var num2_2 = new ListNode(6, num1_1);
var num2_3 = new ListNode(5, num1_2);

addTwoNumbers(num1_3, num2_3)

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

    let current: ListNode | null = l1
    
    let numberAsStr1: string = ""
    let numberAsStr2: string = ""

    while(current != null) {
        console.log( current.val )
        console.log( current.next )
        numberAsStr1 += current.val;
        current = current.next
    }

    // current = l2

    // while(current != null) {
    //     numberAsStr2 += current.val;
    //     current = current.next
    // }

    console.log( numberAsStr1)
    // console.log( numberAsStr2)

    return current
};
