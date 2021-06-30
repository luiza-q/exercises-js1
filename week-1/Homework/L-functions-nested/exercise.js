var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function nameUpper(name) {
    return name.toUpperCase();

} 

function greetingMentors(name) {
    const message = "HELLO " + nameUpper(name);
    return message;
}


console.log(greetingMentors(mentor1));
console.log(greetingMentors(mentor2));
console.log(greetingMentors(mentor3));
console.log(greetingMentors(mentor4));
console.log(greetingMentors(mentor5));
