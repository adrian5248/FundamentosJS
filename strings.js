let name = "Adrian";
let lastname = "Duran";
let age = 19;

console.log("soy" + name + 'y mi apellido es ' + lastname);

console.log("I'm" + name + " " + lastname);
console.log("I\'m" + name + " " + lastname);

// Imprimir Soy Adrian Duran y tengo 19 años
// Srrings templates o Strings Literals
// placeholder ${}
console.log(`Soy ${ name } ${ lastname } y tengo ${ age } años`);

// metodos y atributos para Strings
const texto = "Este Es uN TexTo";
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());
console.log(texto.charAt(5));
console.log(texto.endsWith('s'));
console.log(texto.includes('es'));
console.log(texto.length);
console.log('*'.repeat(10))


