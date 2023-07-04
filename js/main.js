for (let i = 1; i <= 100; i++) {
    if ((i % 2) == 0) {
        let x = "Fizz"
        console.log(x)
    } else if ((i % 5) == 0) {
        let x = "Buzz"
        console.log(x)
    } else if (((i % 2) == 0) && ((i % 5) == 0)) {
        let x = "FizzBuzz"
        console.log(x)
    } else {
        console.log(i)
    }
}