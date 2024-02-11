/* Question 2: Fibonacci Sequence
    Write a program to generate the Fibonacci sequence up to 100. 
*/

function fibonacci() {
    let fib = [0, 1];
    let i = 2;
    while (fib[i - 1] + fib[i - 2] <= 100) {
        fib[i] = fib[i - 1] + fib[i - 2];
        i++;
    }
    console.log(fib)
    return fib;
}

fibonacci()
