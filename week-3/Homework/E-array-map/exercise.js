// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

let numbersMultiplied = numbers.map(multiply => multiply * 100);

console.log(numbersMultiplied);


function multiplyByHundred(number) {
    return number * 100;
}

let otherSolution = numbers.map(multiplyByHundred);

console.log(otherSolution);