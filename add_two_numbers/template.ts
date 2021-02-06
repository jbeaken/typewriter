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


//function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {}
