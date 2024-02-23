function fibonacci(n) {
    // base case
    if (n < 2) {
        return n;
    }

    // recursive call
    return fibonacci(n - 2) + fibonacci(n - 1);
}

function fib(n, counter = 0, arr = []) {
    // base case
    if (arr.length >= n) {
        return arr;
    }

    // add num to arr on every recursive call
    arr.push(fibonacci(counter));

    // recursive call
    return fib(n, counter += 1, arr);
}

console.log(fib(15)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]
