// Takes an array of birthYears
// Uses console.log to print the message These are the birth years of people who can drive: <filtered birth years>
// Returns an array of people who can drive (remember, you can drive if you are 17 years or older)

const birthYears =  [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ];

let isSeventeen = (yearBorn) => yearBorn <= 2004;

const canDrive = birthYears.filter(isSeventeen);

console.log('These are the birth years of people who can drive: ' + canDrive);