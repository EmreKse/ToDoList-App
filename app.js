
const form = document.querySelector('.add-form');
const list = document.querySelector('.todos');

function createTemplate(toDo) {
    let html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${toDo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>`;

    list.innerHTML += html;
};

form.addEventListener('submit', e => {
    e.preventDefault();

    const toDo = form.add.value.trim();

    if (toDo.length) {
        createTemplate(toDo);
        form.reset();
    }
});

list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});
