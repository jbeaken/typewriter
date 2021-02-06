import {ListNode} from './app/listnode'
import {getListNodeFromNumber} from './app/listnode'

// 342 and 465
let num1 = getListNodeFromNumber( "342" )
let num2 = getListNodeFromNumber( "465" )
addTwoNumbers(num1, num2)

// 942 and 9465
num1 = getListNodeFromNumber( "942" )
num2 = getListNodeFromNumber( "9465" )
addTwoNumbers(num1, num2)


//1000000000000000000000000000001 and 465
num1 = getListNodeFromNumber( "1000000000000000000000000000001" )
num2 = getListNodeFromNumber( "465" )
addTwoNumbers(num1, num2)

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
   
    let current : ListNode | null = l1
    let sum1: string = ""
    let sum2: string = ""
 
    while(current != null) {
     sum1 = sum1 + current.val
     current = current.next
    }
 
    //reverse
    sum1 = sum1.split('').reverse().join('')
 
    current = l2
 
    while(current != null) {
     sum2 = sum2 + current.val
     current = current.next
    }
 
    sum2 = sum2.split('').reverse().join('')
 
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
     console.log( result )
    return result

}