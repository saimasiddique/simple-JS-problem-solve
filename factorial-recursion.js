// program to find the factorial of a number
function factorial(x) {

    /*
     === (Triple equals) is a strict equality comparison operator in JavaScript, 
    which returns false for the values which are not of a similar type. 
    This operator performs type casting for equality.
     If we compare 2 with “2” using ===, then it will return a false value.
      */

    // if number is 0
    if (x === 0) {
        return 1;
    }

    // if number is positive
    else {
        return x * factorial(x - 1);
    }
}

const num = 3;

// calling factorial() if num is non-negative
if (num > 0) {
    let result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}