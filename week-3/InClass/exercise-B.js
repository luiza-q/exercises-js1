let classOne = ['Luiza', 'Elmira', 'Bianca', 'Amritpal'];
let classTwo = ['Suman', 'Diego', 'Maxwell', 'Rana'];

let twoClassesTogether = classOne.concat(classTwo);

console.log(twoClassesTogether.sort());

function checkNameOnArray(name){
    if (classOne.includes(name)){
        return name + ' is at the class with ' + classOne; 
    }
    return name + ' is not at the class with ' + classOne;
}

console.log(checkNameOnArray('Luiza'));
console.log(checkNameOnArray('Suman'));