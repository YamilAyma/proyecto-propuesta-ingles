document.addEventListener("DOMContentLoaded", ()=>{

    const pdfBoton = document.querySelector("#botonPdf")

    pdfBoton.addEventListener("click", ()=>{
        window.print()
    })


    // Obtener la oferta
    const ofertaRegistrada = obtenerOfertaPostulada()

    // Capturar elementos de la oferta de prácticas elegida
    const ofertaTitulo = document.getElementById('ofertaTitulo');
    const ofertaDireccion = document.getElementById('ofertaDireccion');
    const ofertaEstado = document.getElementById('ofertaEstado');
    const ofertaModalidad = document.getElementById('ofertaModalidad');
    const ofertaNvacantes = document.getElementById('ofertaNvacantes');
    const ofertaConvenio = document.getElementById('ofertaConvenio');
    const ofertaFechaInicioFinal = document.getElementById('ofertaFechaInicioFinal');
    const ofertaCarrera = document.getElementById('ofertaCarrera');
    const ofertaDescripcion = document.getElementById('ofertaDescripcion');
    const dniMonitor = document.getElementById('dniMonitor');
    const telefonoMonitor = document.getElementById('telefonoMonitor');
    const correoMonitor = document.getElementById('correoMonitor');
    const nombreMonitor = document.getElementById('nombreMonitor');
    const apellidosMonitor = document.getElementById('apellidosMonitor');
    const cargoMonitor = document.getElementById('cargoMonitor');

    // Colocar los datos de la oferta elegida
    ofertaTitulo.textContent = ofertaRegistrada.titulo;
    ofertaDireccion.textContent = ofertaRegistrada.direccion;
    ofertaEstado.textContent = ofertaRegistrada.estado;
    ofertaModalidad.textContent = ofertaRegistrada.modalidad;
    ofertaNvacantes.textContent = `${ofertaRegistrada.nVacantes} vacantes`;
    ofertaConvenio.textContent = ofertaRegistrada.convenio;
    ofertaFechaInicioFinal.textContent = `Fecha de inicio: ${ofertaRegistrada.fechaInicio} - Fecha de fin: ${ofertaRegistrada.fechaFin}`;
    ofertaCarrera.textContent = ofertaRegistrada.carrera;
    ofertaDescripcion.textContent = ofertaRegistrada.descripcion;
    dniMonitor.textContent = ofertaRegistrada.dniMonitor;
    telefonoMonitor.textContent = ofertaRegistrada.telefonoMonitor;
    correoMonitor.textContent = ofertaRegistrada.correoMonitor;
    nombreMonitor.textContent = "Nombre: " + ofertaRegistrada.nombreMonitor;
    apellidosMonitor.textContent = "Apellidos: " + ofertaRegistrada.apellidosMonitor;
    cargoMonitor.textContent = "Cargo: " + ofertaRegistrada.cargoMonitor;
})