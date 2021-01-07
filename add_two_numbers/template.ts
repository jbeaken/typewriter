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

let listNode1 = addTwoNumbers(num1_3, num2_3)

console.log( listNode1 )

// 942 and 9465
var num3_1 = new ListNode(9, null);
var num3_2 = new ListNode(4, num3_1);
var num3_3 = new ListNode(2, num3_2);

var num4_1 = new ListNode(9, null);
var num4_2 = new ListNode(4, num4_1);
var num4_3 = new ListNode(6, num4_2);
var num4_4 = new ListNode(5, num4_3);

let listNode2 = addTwoNumbers(num3_3, num4_4)

console.log( listNode2 )

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
   
   let current : ListNode | null = l1
   let sum1: string = ""
   let sum2: string = ""

   while(current != null) {
    sum1 = sum1 + current.val
    current = current.next
   }

   current = l2

   while(current != null) {
    sum2 = sum2 + current.val
    current = current.next
   }

   console.log( "1st : " + sum1 )
   console.log( "2nd : " + sum2 )

   let total = Number(sum1) + Number(sum2)

   console.log( "total : " + total )
   
   const chars = [...total.toString()];

   let result : ListNode | null = null

   //Argh!
   //To prevent Variable 'dummyHead' is used before being assigned
   let dummyHead: ListNode = new ListNode()

   for(let c of chars.reverse()) {
        let local : ListNode = new ListNode(Number(c))

        if(result == null) {
            //first character
            result = local
            dummyHead = result
        } else {
            dummyHead.next = local
            dummyHead = dummyHead.next
        }
    }

    //in case empty result
    if (result == null) result = new ListNode(); //zero

   return result
};
