/* Question 1: FizzBuzz
    Write a program that prints the numbers from 1 to 100. For multiples of 3, print "Fizz"; for
    multiples of 5, print "Buzz"; and for numbers that are multiples of both 3 and 5, print
    "FizzBuzz". 
*/

const fizzBuzz = () => {
    for (let i = 1; i <= 100; i++) {
        let multiple = "";
        multiple = i%3 === 0? multiple+= "Fizz":""
        multiple = i%5 === 0? multiple += "Buzz":""
        console.log(multiple||i);
    }
}

fizzBuzz()
