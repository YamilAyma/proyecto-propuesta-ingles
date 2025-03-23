// FUNCIONES AUXILIARES
function reemplazarUrl(nueva_ruta){
    let rutaActual = window.location.href;
    // Dividir la ruta
    r = rutaActual.replace(rutaActual.substring(rutaActual.lastIndexOf("/")+1), nueva_ruta)
    window.location = r 

}