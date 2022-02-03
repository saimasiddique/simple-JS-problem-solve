function positiveNumbers(inputArray) {
    let newArray = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] >= 0) {
            newArray.push(inputArray[i]);
        }
        else {
            break;
        }
    }
    return newArray;
}

const array = [2, 45, 7, 65, 13, 0, -35, -92, 48, 33];
const outputArray = positiveNumbers(array);
console.log(outputArray);