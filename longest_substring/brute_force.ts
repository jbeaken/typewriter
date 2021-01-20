let result = getLongestSubstring( "abcdefabcbb" )

console.log( result )

function getLongestSubstring(str : string): number {

    console.log( "String : " + str)

    let ans = 0

    for(let i = 0; i < str.length; i ++) {
        for(let j = 0; j < str.length; j++) {

            let s = str.substring(i, j)
            if(hasUniqueCharacters( s )) {
                ans = Math.max( ans, Math.abs(i-j))
            }
        }
    }
    
    return ans
}

function hasUniqueCharacters(s : string): boolean {

    let set = new Set();
    const chars = [...s];

    for(let c of chars) {
        if(set.has( c )) return false
        else set.add( c )
    }

    return true
}