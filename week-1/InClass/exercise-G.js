const numberOfStudents = 14;
const numberOfMentors = 3;
const numberTotal = numberOfStudents + numberOfMentors;

const percentageStudents = numberOfStudents * 100 / numberTotal

const percentageMentors = numberOfMentors * 100 / numberTotal

console.log("Percentage of Students: " + Math.round(percentageStudents) + "%");
console.log("Percentage of Mentors: " + Math.round(percentageMentors) + "%");