// Create a function which:
// Takes an array of names
// Looks to see if your name is in the array
// If it is, return Found me!; if not, return Haven't found me :(

const names = ['Ana', 'Bete', 'Carlos'];

const otherNames = ['Daniel', 'Luiza', 'Maria'];


function findName(firstName, namesList) {
    
    const nameFound = namesList.find((name) => name === firstName);
    
    if (nameFound !== null && nameFound !== undefined) {
        return 'Found me!'
    } else {
        return 'Haven\'t found me :('
    }
}

console.log(findName('Luiza', names));
console.log(findName('Luiza', otherNames));
