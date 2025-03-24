// Estos objetos fueron usados para probar el funcionamiento, son registros del usuario
const usuarioMock = {
    id: '101010',
    nombre: "Practicante 01",
    apellidos: "0100101",
    // curriculumn: "PDF",
    telefono: '292992',
    idCarrera: '1000',
    sede: 'Independencia',
    correo: "practicante0101@gmial.com",
    contrasena: "1010admin20202",
    rol: "practicante"
}

const empresaMock = {
    id: "10101",
    razonSocial: "SENALINK",
    descripcion: "Proyecto ...",
    provincia: "Lima",
    distrito: "Lima",
    departamento: "Lima",
    sector: "Tecnologia",
    telefono: "999888777",
    correo: "senalinktec@mail.com",
    contrasena: "299291",
    rol: "empresa"
}


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