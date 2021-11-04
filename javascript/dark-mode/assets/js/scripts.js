function changeMode(){
    changeClasses()
    changeText()
}

function changeClasses(){
    button.classList.toggle('dark-mode')
    h1.classList.toggle('dark-mode')
    body.classList.toggle('dark-mode')
    footer.classList.toggle('dark-mode')
}

function changeText(){
    if(body.classList.contains('dark-mode')){
        button.innerHTML = 'Light Mode'
        h1.innerHTML = "Dark Mode ON"
        return;
    }

    button.innerHTML = 'Dark mode'
    h1.innerHTML = "Light Mode ON"
}

const button = document.getElementById('mode-selector') /*Aqui estamos selecionando o id do botão que está no index.html*/
const h1 = document.getElementById('page-title')
const body = document.getElementsByTagName('body')[0]
const footer = document.getElementsByTagName('footer')[0]

console.log(body)

button.addEventListener('click', changeMode)