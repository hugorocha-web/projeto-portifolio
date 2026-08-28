const btn = document.getElementById('btn')
const body = document.querySelector('body')
let icone = document.querySelector('#icone')

btn.addEventListener('click', clicar)

function clicar(event){
    body.classList.toggle('escuro')
    if (body.classList.contains('escuro')) {
        icone.classList.replace('fa-moon', 'fa-sun');
    } 
    else {
        icone.classList.replace('fa-sun', 'fa-moon');
    }

}