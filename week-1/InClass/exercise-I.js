function getYearBorn(age) {
    const date = new Date();
    return date.getFullYear() - age;
}


function greeting(name, age) {
    const  yearBorn = getYearBorn(age);
    const message = "I'm " + name + " and I was born in " + yearBorn;
    return message;
}

console.log(greeting("Luiza", 35));