// Create a function that takes a birthYear, and returns the age of someone
// You are given an array with year that 7 people were born, [1964, 2008, 1999, 2005, 1978, 1985, 1919]. Take this array and create another array containing their ages.
// console.log the birth years array

const years = [1964, 2008, 1999, 2005, 1978, 1985, 1919];


function getAge(yearBorn) {
    return 2021 - yearBorn;
}

const newArrayWithAges = years.map(getAge);

console.log(years);





  
