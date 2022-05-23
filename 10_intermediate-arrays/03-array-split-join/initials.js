// Write a function initials(name) that accepts a full name as an arg. 
// The function should return the initials for that name.

function initials(name) {
    let names = name.split(" ");
    let initials = "";

    for (let i = 0; i < names.length; i++) {
        initials += names[i][0].toUpperCase();
    }

    return initials;
}

console.log(initials('anna paschall')); // 'AP'
console.log(initials('Mary La Grange')); // 'MLG'
console.log(initials('brian crawford scott')); // 'BCS'
console.log(initials('Benicio Monserrate Rafael del Toro Sánchez')); // 'BMRDTS'