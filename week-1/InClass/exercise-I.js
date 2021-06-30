function getYearBorn(age) {
    return 2021 - age;
}


function greeting(name, age) {
    const  yearBorn = getYearBorn(age);
    const message = "I'm " + name + " and I was born in " + yearBorn;
    return message;
}

console.log(greeting("Luiza", 35));