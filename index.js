
function fizzBuzzLogic(i) {
    if (i % 3 === 0 && i % 5 === 0) {
        return `${i} FizzBuzz`;
    } else if (i % 3 === 0) {
        return `${i} Fizz`;
    } else if (i % 5 === 0) {
        return `${i} Buzz`;
    } else {
        return `${i}`;
    }
}

function myProgram() {
    for (let i = 1; i <= 100; i++) {
        console.log(fizzBuzzLogic(i));
    }
}

myProgram();

module.exports = {fizzBuzzLogic};