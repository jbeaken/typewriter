export class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

export function getListNodeFromNumber(num : string) : ListNode | null {
    console.log("hello" + num )
    let result: ListNode | null = null
    let dummyHead = new ListNode(); //empty
    const chars = [...num];

    for(let c of chars.reverse()) {
        let local = new ListNode(Number(c))

        if(result == null) {
            result = local
            dummyHead = result
        } else {
            dummyHead.next = local
            dummyHead = dummyHead.next
        }
    }
    console.log(result)
    return result
}