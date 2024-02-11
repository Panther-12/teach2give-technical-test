/* 
Question 5: Reverse Integer
    Write a program that takes an integer as input and returns an integer with reversed digit
    ordering. 
*/

const sampleInteger = 123456

function reverseInteger(num) {
    const reversedInteger = parseInt(Math.abs(num).toString().split('').reverse().join('')) * Math.sign(num);
    console.log(reversedInteger)
    return reversedInteger;
}

reverseInteger(sampleInteger)
