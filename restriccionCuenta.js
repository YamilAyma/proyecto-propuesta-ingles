// Script para permitir que pueda acceder a su cuenta cuando termino de login/register
// Redirigir si no se ha encontrado usuario
const usuario = JSON.parse(localStorage.getItem('usuario'))

if(!usuario){
    // Hacia el home
    reemplazarUrl("login.html")
}

function cerrarSesion(){
    localStorage.removeItem('usuario')
    reemplazarUrl("index.html")
}

function editarPerfil(){
    reemplazarUrl("index.html")
}