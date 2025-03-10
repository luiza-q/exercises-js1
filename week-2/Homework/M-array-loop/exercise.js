/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/


const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function printStartsWithT(daysOfWeek) {
  
  for (let day = 0; day < daysOfWeek.length; day++) {
  
    if (daysOfWeek[day].startsWith('T')){
      console.log(daysOfWeek[day]);
    }
  
  }

} 

printStartsWithT(daysOfWeek);