const btn = document.getElementById('btn')
const body = document.querySelector('body')


btn.addEventListener('click', clicar)



function clicar(){
    body.classList.toggle('escuro')
    console.log(body)
}
