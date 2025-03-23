// Script para permitir que pueda acceder a su cuenta cuando termino de login/register
// Redirigir si no se ha encontrado usuario
const usuario = localStorage.getItem('usuario')
if(!usuario){
    // Hacia el home
    reemplazarUrl("login.html")
}

function cerrarSesion(){
    console.log("CERRAR")
    localStorage.removeItem('usuario')
    reemplazarUrl("index.html")
}