// Estos objetos fueron usados para probar el funcionamiento, son registros del usuario
// Son el modelos de datos enviados en formularios
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

const ofertaPracticaMock = {
    apellidosMonitor: "Perez Pasteles",
    cargoMonitor: "Gerente General",
    carrera: "Tecnología de Procesos de Producción de Prendas de Vestir",
    convenio: "Convenio de Colaboración Mutua",
    correoMonitor: "aaa@aaa",
    descripcion: "Esta es una oferta de trabajo",
    direccion: "Lima",
    dniMonitor: "000999888",
    fechaFin: "2025-09-22",
    fechaInicio: "2025-03-21",
    modalidad: "presencial",
    nVacantes: "2",
    nombreMonitor: "Mario Pa",
    telefonoMonitor: "2929292",
    titulo: "Desarrollador Web"
};

// FUNCIONES AUXILIARES
// Objeto global para identificar que oferta está eligiendo el usuario.
let ofertaPostular
if(!ofertaPostular){
    ofertaPostular = {}    
}



function reemplazarUrl(nueva_ruta){
    let rutaActual = window.location.href;
    // Dividir la ruta
    r = rutaActual.replace(rutaActual.substring(rutaActual.lastIndexOf("/")+1), nueva_ruta)
    window.location = r 

}

function obtenrUsuarioLogeado(){
    return JSON.parse(localStorage.getItem('usuario'))
}


function guardarDatosUsuario(idForm, rol){
    const form = document.getElementById(idForm);

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita que se recargue la página
    
        const formData = new FormData(form);
        const datos = Object.fromEntries(formData.entries()); // Convierte FormData en un objeto
        datos.rol = rol
        agregarUsuario(datos)

        localStorage.setItem('usuario', JSON.stringify(datos))
        //Redirigir a la vista de acceso
        reemplazarUrl('cuenta.html')
    });    
}
