function numberChecker(num) {
  if (num > 20) { //checks if number is greater than 20
    return `${num} is greater than 20`; //if number is greater than 20, returns this string
  } else if (num === 20) { //checks if number is equal to 20
    return `${num} is equal to 20`; //if number is equal to 20, returns this string
  } else if (num < 20) { //checks if number is less than 20
    return `${num} is less than 20`; //if number is less than 20, returns this string
  } else { //if not of the above are true
    return `${num} isn't even a number :(`; //returns this string
  }
}