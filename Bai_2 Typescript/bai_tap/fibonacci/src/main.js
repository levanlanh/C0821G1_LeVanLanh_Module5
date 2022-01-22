var count = 20;
var sum = 0;
for (var i = 0; i < count; i++) {
    sum += fib(i);
}
function fib(num) {
    var sum = 0;
    if (num <= 1) {
        return num;
    }
    else {
        return fib(num - 1) + fib(num - 2);
    }
}
console.log("Tổng 20 số fibonacci đầu tiên: " + "\n" + sum);
