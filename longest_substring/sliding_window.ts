let ans = getLongestSubstringBySlidingWindow( "abcabcbb" )

console.log( ans )

function getLongestSubstringBySlidingWindow(str : string): number | null {

    console.log( "String : " + str)

    let i: number = 0
    let j: number = 0
    let ans: number = 0

    let len = str.length

    let set = new Set()

    while(i < len && j < len) {
        let c: string = str[j]

        if(set.has( c )) {
            i++
            set.delete( c )
        } else {
            j++
            set.add( c )
            ans = Math.max( ans, (j - i) )
        }
    }

    return ans
}