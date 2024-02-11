/* Question 3: Power of Two
    Write a program that takes an integer as input and returns true if the input is a power of two. 
*/

const sampleNum = 8

function isPowerOfTwo(num) {
    let isPower = num > 0 && (num & (num - 1)) === 0;
    console.log(`${isPower} ${num} is a power of 2`)
    return isPower
}

isPowerOfTwo(sampleNum)