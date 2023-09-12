//Condicional If
//if(exp){}
let age = 18;
if(age >= 18){
    console.log('Es mayor de edad');
}

//if(exp){} else {}
if(age >= 18){
    console.log('Es mayor de edad');
} else {
    console.log('Es menor de edad');
}

// If ternario (exp)?  true: false;
age >= 18? console.log('Es mayor'): console.log('Es menor');

//if(exp){} else if (exp) else {}
let ppt = Math.random();
if(ppt < 0.33){
    console.log('cayó piedra');
} else if (ppt < 0.66){
    console.log('cayó Papel');
} else {
    console.log('cayó Tijera');
}

// switch case
let day = Math.floor(Math.random() * 7);
switch(day){
    case 0:
        console.log('Es Domingo');
        break;  
    case 1:
        console.log('Es Lunes');
        break;  
    case 2:
        console.log('Es Martes');
        break;  
    case 3:
        console.log('Es Miércoles');
        break;  
    case 4:
        console.log('Es Jueves');
        break;  
    case 5:
        console.log('Es Viernes');
        break;
    default:
        console.log('Es Sábado');  
} 

let username = '';
let defaulName;

if(username){
    defaulName = username;
} else {
    defaulName = 'Extraño';
}

console.log(defaulName);

username = 'Peter';
defaulName = username || 'Extraño';
console.log(defaulName);