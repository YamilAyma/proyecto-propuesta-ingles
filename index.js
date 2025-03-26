document.addEventListener("DOMContentLoaded", () => {
    
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

   
});
