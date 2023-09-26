
// Los objetos nos perimten almacenar datos 
// apartir de una clave 
/*
miObjeto = { clave valor, 'clave': valor }
miObjeto.clave
miObjeto{'clave'}
*/

const subjet = {
    name: 'Programación',
    totalHours: 90,
    weekHours: 7,
    classroom: 'Lab progra',
    teacher: 'Jose Manuel',
    'practice hours': 60
}

console.log(subjet.name);
console.log(subjet.totalHours);
console.log(subjet['weekHours']);
console.log(subjet['practice hours']);

subjet.classroom = 'Lab Programación 1';
console.log(subjet.classroom);

console.log(subjet);

subjet['teorical hours'] = 30;
console.log(subjet);

const group = {
    name: '4C',
    career: 'TIADSM',
    subjets: [
        subjet
    ],
    students: [
        { name: 'Gael', lastname: 'Pérez'},
        { name: 'Juan', lastname: 'Sánchez'},
        { name: 'Dani', lastname: 'Álvarez'}
    ]
}

console.log(group);
console.log(group.students);
