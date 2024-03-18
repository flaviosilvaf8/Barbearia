const btn = document.querySelector('.btn');
const input = document.querySelector('input')
let ul = document.querySelector('.list-box ul');

function data() {
    let name = document.getElementById('nome').value;
    let service = document.getElementById('options').value;
    let schedule = `Nome: ${name.bold()} | Serviço: ${service.bold()}`;

    let newLi = document.createElement('li');
    newLi.innerHTML = schedule;
    newLi.classList.add('list-decoration')
    ul.appendChild(newLi);

    alert('Seu agendamento foi salvo com sucesso!');

    return input.value = '';
}

btn.addEventListener("click", data);

/* botão menu */
const btnNav = document.querySelector('.btn-nav');

const nav = document.querySelector('nav');

btnNav.addEventListener("click", () => {
    nav.classList.toggle('active')
})

