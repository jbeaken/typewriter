
let result1 = twoSum([2,7,11,15], 18)
let result2 = twoSum([2,7,11,15], 26)
let result3 = twoSum([2,7,11,15], 9)

console.log(result1)
console.log(result2)
console.log(result3)


function twoSum(nums: number[], target: number): number[] | null {
    for(let i in nums) {
        for(let j in nums) {
            if(i == j) continue

            if(nums[i] + nums[j] == target) return [Number(i), Number(j)]
        }
    }
    return null;
}

