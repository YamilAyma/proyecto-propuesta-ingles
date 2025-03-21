document.addEventListener("DOMContentLoaded", () => {
    const contenedorOfertas = document.querySelector(".boxCtnOfertas");
    const inputBusqueda = document.getElementById("inputBusqueda");
    const btnBuscar = document.getElementById("btnBuscar");

    let ofertasData = []; // Variable global para almacenar los datos del JSON

    // Función para cargar las ofertas desde el JSON
    async function cargarOfertas() {
        try {
            const respuesta = await fetch("ofertas.json");
            ofertasData = await respuesta.json();
            mostrarOfertas(ofertasData);
        } catch (error) {
            console.error("Error al cargar las ofertas:", error);
        }
    }

    // Función para mostrar las ofertas filtradas en el HTML
    function mostrarOfertas(ofertas) {
        contenedorOfertas.innerHTML = ""; // Limpiar el contenedor antes de agregar nuevas ofertas

        if (ofertas.length === 0) {
            contenedorOfertas.innerHTML = "<p>No se encontraron resultados.</p>";
            return;
        }

        ofertas.forEach(oferta => {
            const ofertaHTML = `
                <section class="ctnOfeta">
                    <span class="blockOferta1">
                        <h4 class="ofertaTitulo">${oferta.titulo}</h4>
                        <p class="ofertaDistrito">Distrito: ${oferta.distrito}</p>
                    </span>
                    <button class="ofertaBtnPostularse">Postularse</button>
                    <hr>
                    <span class="blockOferta2">
                        <p class="ofertaFecha">Fecha de inicio: ${oferta.fechaInicio} - Fecha de fin: ${oferta.fechaFin}</p>
                        <p class="ofertaEstado">${oferta.estado}</p>
                        <p class="ofertaModalidad">${oferta.modalidad}</p>
                        <p class="ofertaCarrera">Carrera: ${oferta.carrera}</p>
                        <p class="ofertaNumVacantes">${oferta.vacantes} vacantes</p>
                        <p class="ofertaTipoConvenio">Convenio: ${oferta.convenio}</p>
                    </span>
                    <span class="blockOferta3">
                        <p class="ofertaDescripcion">${oferta.descripcion}</p>
                    </span>
                </section>
            `;
            contenedorOfertas.innerHTML += ofertaHTML;
        });
    }

    // Función para filtrar las ofertas en base a la búsqueda
    function filtrarOfertas() {
        const termino = inputBusqueda.value.trim().toLowerCase();
        const ofertasFiltradas = ofertasData.filter(oferta => 
            oferta.distrito.toLowerCase().includes(termino) ||
            oferta.carrera.toLowerCase().includes(termino)
        );

        mostrarOfertas(ofertasFiltradas);
    }

    // Event Listeners para búsqueda
    btnBuscar.addEventListener("click", filtrarOfertas);
    inputBusqueda.addEventListener("input", filtrarOfertas); 

   
    cargarOfertas();
});
