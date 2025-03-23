// FUNCIONES AUXILIARES
function reemplazarUrl(nueva_ruta){
    let rutaActual = window.location.href;
    // Dividir la ruta
    r = rutaActual.replace(rutaActual.substring(rutaActual.lastIndexOf("/")+1), nueva_ruta)
    window.location = r 

}

function guardarDatosUsuario(idForm, rol){
    const form = document.getElementById(idForm);

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita que se recargue la página
    
        const formData = new FormData(form);
        const datos = Object.fromEntries(formData.entries()); // Convierte FormData en un objeto
        datos.rol = rol

        localStorage.setItem('usuario', JSON.stringify(datos))
    //   Redirigir a la vista de acceso
        reemplazarUrl('cuenta.html')
    });    
}