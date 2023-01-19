let lamp = document.getElementById('lapon')
let buton = document.getElementById('on')
let butoff = document.getElementById('off')
buton.addEventListener('click', on)
butoff.addEventListener('click', off)
lamp.addEventListener('mouseover', move)
lamp.addEventListener('mouseleave', leave)
lamp.addEventListener('dblclick' , clicar)

function isVerificar() {
    return lamp.src.indexOf ( 'quebrada') > -1
}
function on() {
    if(!isVerificar()){
     lamp.src ='./imagens/ligada.jpg'
    }
}
function off() {
    if(!isVerificar()){
          lamp.src = './imagens/desligada.jpg'
    }
}
function move() {
    if(!isVerificar()){
    lamp.src = './imagens/ligada.jpg' 
}
}
function leave() {
    if(!isVerificar()){
        lamp.src = './imagens/desligada.jpg'
    }
}
function clicar() {
    lamp.src = './imagens/quebrada.jpg'
}


