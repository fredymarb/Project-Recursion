function fibonacci(n) {
    const arr = [];

    let num1 = 0;
    let num2 = 1;
    let temp;

    for (let i = 0; i < n; i++) {
        arr.push(num1);
        temp = num1 + num2;
        num1 = num2;
        num2 = temp;
    }

    return arr;
}

console.log(fibonacci(30));