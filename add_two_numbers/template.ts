class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// 342 and 465
let num1 = getListNodeFromNumber( 342 )
let num2 = getListNodeFromNumber( 465 )

let local = getListNodeFromNumber( 342 )

let listNode = addTwoNumbers(num1, num2)
console.log( listNode )

// 942 and 9465
num1 = getListNodeFromNumber( 942 )
num2 = getListNodeFromNumber( 9465 )

listNode = addTwoNumbers(num1, num2)
console.log( listNode )

function getListNodeFromNumber(num : number) : ListNode | null {

    let result: ListNode | null = null
    let dummyHead = new ListNode(); //empty
    const chars = [...num.toString()];

    for(let c of chars) {
        let local = new ListNode(Number(c))

        if(result == null) {
            result = local
            dummyHead = result
        } else {
            dummyHead.next = local
            dummyHead = dummyHead.next
        }
    }

    return result
}

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
