

// Se usa dentro de un evento para evitar que se propague las constantes en otras paginas
document.addEventListener("DOMContentLoaded",()=> {

    // Se usan los datos almacenados en localStorage
    const nombreUsuario = document.querySelector('.cuentaUsuarioNombre');
    const apellidoUsuario = document.querySelector('.cuentaUsuarioAdicional');
    const correoUsuario = document.querySelector('.cuentaUsuarioCorreo');
    const telefonoUsuario = document.querySelector('.cuentaUsuarioTelefono');
    const ubicacionUsuario = document.querySelector('.cuentaUsuarioUbicacion');

    if(usuario.rol == "practicante"){
        document.querySelector("#ofertaPractica").classList.add('invisible')        
    }else{
        document.querySelector("#ofertaPractica").classList.remove('invisible')        
    }
    
    // Ejemplo de modificación
    // Uso de operador ??
    // Para saber: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
    nombreUsuario.textContent = usuario.razonSocial ?? usuario.nombre ;
    apellidoUsuario.textContent = usuario.descripcion ?? usuario.apellidos;
    correoUsuario.textContent = usuario.correo;
    telefonoUsuario.textContent = usuario.telefono;
    ubicacionUsuario.textContent = usuario.sede ?? usuario.distrito;
})
