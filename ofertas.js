
const ofertaModelo = {
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
    titulo: "Desarrollador Web",
    estado: "Activo"
};

const ofertasPractica = [
    {
        apellidosMonitor: "García López",
        cargoMonitor: "Coordinador de Tecnología",
        carrera: "Ingeniería de Software",
        convenio: "Convenio de Colaboración Mutua",
        correoMonitor: "garcia@empresa.com",
        descripcion: "Desarrollo y mantenimiento de aplicaciones web.",
        direccion: "Lima, San Isidro",
        dniMonitor: "12345678",
        fechaFin: "2025-09-30",
        fechaInicio: "2025-04-01",
        modalidad: "remota",
        nVacantes: "3",
        nombreMonitor: "Carlos García",
        telefonoMonitor: "987654321",
        titulo: "Desarrollador Web",
        estado: "Activo"
    },
    {
        apellidosMonitor: "Fernández Ruiz",
        cargoMonitor: "Jefe de Análisis de Datos",
        carrera: "Ciencia de Datos",
        convenio: "Prácticas Pre-Profesionales",
        correoMonitor: "fernandez@empresa.com",
        descripcion: "Análisis de grandes volúmenes de datos con Python.",
        direccion: "Arequipa, Cercado",
        dniMonitor: "87654321",
        fechaFin: "2025-10-15",
        fechaInicio: "2025-05-10",
        modalidad: "híbrida",
        nVacantes: "2",
        nombreMonitor: "Lucía Fernández",
        telefonoMonitor: "945678321",
        titulo: "Analista de Datos",
        estado: "Activo"
    },
    {
        apellidosMonitor: "Ramos Díaz",
        cargoMonitor: "Líder UX/UI",
        carrera: "Diseño UX/UI",
        convenio: "Convenio de Colaboración Mutua",
        correoMonitor: "ramos@empresa.com",
        descripcion: "Diseño de interfaces atractivas y funcionales.",
        direccion: "Cusco, San Sebastián",
        dniMonitor: "45678912",
        fechaFin: "2025-11-30",
        fechaInicio: "2025-06-15",
        modalidad: "presencial",
        nVacantes: "1",
        nombreMonitor: "Andrea Ramos",
        telefonoMonitor: "956874123",
        titulo: "Diseñador UX/UI",
        estado: "Activo"
    }
];

function setupOfertasPractica(){
    if(!localStorage.getItem("practicas")){
        const mockJSON = JSON.stringify(ofertasPractica);
        console.log(mockJSON);
        localStorage.setItem('practicas', mockJSON)
    }
}

// Recibe un objeto el cual se añadirá al array obtenido
function actualizarOfertasPractica(nuevaOferta){
    let practicasMemoria = JSON.parse(localStorage.getItem("practicas"))
    
    practicasMemoria.push(nuevaOferta)
    localStorage.setItem('practicas', JSON.stringify(practicasMemoria))
}
