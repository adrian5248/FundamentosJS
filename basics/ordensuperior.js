// Funciones de Orden superior
// High Order Functions
// Funciones que reciben como parametros 
// más funciones 

const myFunctionWthBigName = () => {
    console.log('Función Inicial');
}

console.log(myFunctionWthBigName);
myFunctionWthBigName();

const myFun = myFunctionWthBigName;
myFun();

const funOne = () => {
    console.log('Ejecuta Función Uno');
}

const funTwo = (nombre) => {
    console.log("hi!" + nombre);
    console.log('Ejecuta Función Dos');
}

funOne();
funTwo('Adrian');

const funThree = (otherFuncion) => {
    console.log('Inicia Función tres');
    otherFuncion();
    console.log('Termina Función tres')
}

funThree(funOne);
funThree(() => console.log('Función de Flecha'));

