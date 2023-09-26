// Funciones en Javascript
/*
funtion nombre(params){
    body funtion
}

const nombre = funtion (params){
    body function

}
*/

// Funciones sin parametros, y sin retorno
function saludo(){
    console.log('Helloooo');
}
saludo();

//Funciones con parametros sin retorno
const saludaA = function(name){
    console.log('Hola'+ name);
}
saludaA('Clark kent');

// Funciones con parametros y con retorno
const fact = function (num){
    if(num === 0) return 1;
    return fact(num -1) * num;
}
const result = fact(5);
console.log(result);


// Arrow Functions o funciones de flecha
// Sin parametros y sin retorno
const saludaEnChino = () => { 
    console.log('Ni Hao');
}
saludaEnChino();

// con 1 parametro sin retorno
const mayuscula = (word) =>{
    console.log(word.toUpperCase());
}
mayuscula('hola');

const minuscula = word => {
    console.log(word.toUpperCase());
}
minuscula('Hello');

// Dos o más parámetros y con retorno 
const fullName = (firstname, lastname) => {
    return firstname + ' ' + lastname;
}
const nombreCompleto = fullName('Bruce', 'Wayne');
console.log(nombreCompleto);

// Si el return es la unica linea se puede simplificar 
const duplica = num => num *2;
const doble = duplica(36);
console.log(doble);

/* function duplica(num){
    return num * 2;
}
*/

// Funciones con parametros opcionlaes 
const welcomeToMexico = (user = 'Invitado') => {
    console.log(`Bienvenido a México ${ user }`);

}

welcomeToMexico();
welcomeToMexico("Batman");

// parametros con nombre

const welcomeToUtt = (user = 'Invitado',
                      city = 'México') => {
    console.log(`Bienvenido ${ user } de ${ city }`)
}

welcomeToUtt();
welcomeToUtt('Buruce Wayne', 'Gotham');
welcomeToUtt(city = 'Metropolis', user = 'Superman');