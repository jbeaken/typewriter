let message: string = 'Hello World';

let nums: number[] = [5, 6, 7]
let strings: string[] = ["hello", "there"]


for(let num of nums) {
    for(let str of strings) {
        console.log(str + " " + num)
    }
}

console.log(message);