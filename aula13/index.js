let umaString = "Rayllander Gonçalves";

console.log(umaString[4])

console.log(umaString.indexOf('y'));
console.log(umaString.lastIndexOf('r'));

let letrasMinusculas = umaString.match(/[a-z]/g);
let letrasMaiusculas = umaString.match(/[A-Z]/g);

console.log("Letras minúsculas: ", letrasMinusculas);
console.log("Letras maiúsculas: ", letrasMaiusculas);


console.log(umaString.replace('a', 'e'));

console.log(umaString.replace(/a/g, '#'));

console.log(umaString.length)


console.log(umaString.slice(0, 3))

console.log(umaString.split(' '))

console.log(umaString.toUpperCase())
console.log(umaString.toLowerCase())