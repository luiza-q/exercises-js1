// function greetingFunction(name, greetingStart) {
// var greeting = greetingStart + name;
// console.log(greeting);
// }

// greetingFunction("Luiza", "Oi, meu nome é ")
// greetingFunction("Luiza", "Hi, my name is ")


function greetingFunction(name, greetingStart) {
    var greeting = greetingStart + name;
    return greeting;
    }

var resultGreeting = greetingFunction("Luiza", "Oi, meu nome é ");

console.log(resultGreeting);
