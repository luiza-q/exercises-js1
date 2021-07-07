function isFirstLetterUpper(username) {
    return username.charAt(0) === username.charAt(0).toUpperCase();
}


function checkUsername(username, usertype) {
   
    if (isFirstLetterUpper(username) && username.length >= 5 && username.length <= 10 && usertype === 'user') {
        return 'Username valid';
    }
   
    if (usertype === 'admin' || usertype === 'manager') {
        return "Username valid";
    } 

    else {
        return 'Username invalid';
    }
    
}

console.log(checkUsername('LuizaQ', 'user')); //valid
console.log(checkUsername('Luli', 'user')); //invalid
console.log(checkUsername('Luli', 'manager'));//valid
console.log(checkUsername('Lu', 'admin'));//valid
console.log(checkUsername('luizaQ', 'user'));//invalid
console.log(checkUsername('LuizaQuaglio', 'user'));//invalid