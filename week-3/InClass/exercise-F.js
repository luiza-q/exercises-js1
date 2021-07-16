// You can drive in the UK at the age of 17.
// Write another function that takes a birth year and returns a string Born in {year} can drive or Born in {year} can drive in {x} years
// Use the array of birth years, [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ], to get an array of strings saying if these people can drive
// console.log the answers

const birthYears =  [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ];



birthYears.forEach(function (yearBorn) {
    const minAgeToDrive = 17;
    const currentYear = new Date().getFullYear();
    const minYearToDrive = currentYear - minAgeToDrive;
    
    if (yearBorn <= minYearToDrive) {
        
        console.log(`Born in ${yearBorn} can drive`);
    } else {
        
        const yearsMissing = minAgeToDrive - (currentYear - yearBorn);

        console.log(`Born in ${yearBorn} can drive in ${yearsMissing} years`);
    }
  });