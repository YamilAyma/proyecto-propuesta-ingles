
// Obtener el usuario y su rol para permitirlo acceder
if(!usuario){
    // Hacia el home
    reemplazarUrl("login.html")
}else if(usuario.rol == "practicante"){
    alert("No posees permisos para acceder")
    reemplazarUrl('cuenta.html')
}

document.addEventListener("DOMContentLoaded", ()=>{
    const form = document.getElementById('formOfertaPractica')
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita que se recargue la página
    
        const formData = new FormData(form);
        const datos = Object.fromEntries(formData.entries()); // Convierte FormData en un objeto

        // Añadir descriptivo de que empresa es
        const usuarioLogeado = JSON.parse(localStorage.getItem('usuario'))
        datos.empresa = usuarioLogeado.razonSocial
        datos.estado = "Activo"

        actualizarOfertasPractica(datos)
        // Redirigir a la vista de acceso
        alert("Oferta publicada ✅")
        reemplazarUrl('cuenta.html')
    });    



    
})