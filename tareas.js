const inputTarea = document.getElementById('inputTarea');
const listaTarea = document.querySelector('#tareas ul');


const lista = [];

const addTarea = () => {
    const tareaData = inputTarea.value;
    lista.push(tareaData);
    inputTarea.value = '';
    listaTarea.innerHTML = `<li>${ lista }</li>`;
}