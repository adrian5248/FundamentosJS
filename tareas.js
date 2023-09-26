const inputTarea = document.getElementById('inputTarea');
const listaTarea = document.querySelector('#tareas ul');

const lista = [];

const addTarea = () => {
    const tareaData = inputTarea.value;
    lista.push(tareaData);
    inputTarea.value = '';
    showLista();
}

const showLista = () => {
    let listaHTML = '';
    lista.forEach(listaItem => {
        listaHTML += `<li>${ listaItem }</li>`;
    });
    listaTarea.innerHTML = listaHTML;
}