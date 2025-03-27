
// Se usa dentro de un evento para evitar que se propague las constantes en otras paginas
document.addEventListener("DOMContentLoaded",()=> {

    // Obtener los elementos para poder darles funcionalidad
    const contenedorOfertas = document.querySelector(".ctnRegistros");
    const inputBusqueda = document.getElementById("inputBusqueda");
    const btnBuscar = document.getElementById("btnBuscar");
    
    // Obtener informacion del usuario
    const usuarioLogeado = obtenrUsuarioLogeado()



    // Función para mostrar las ofertas filtradas en el HTML
    function mostrarOfertas() {
        contenedorOfertas.innerHTML = ""; // Limpiar el contenedor antes de agregar nuevas ofertas
        
        const ofertasPublicadas = obtenerOfertasPracticas()
        if (ofertasPublicadas.length === 0) {
            contenedorOfertas.innerHTML = "<p>No se encontraron resultados.</p>";
            return;
        }

        // Crear las vistas previas para todas las ofertas según la carrera
        const ofertasFiltradasPorCarrera = ofertasPublicadas.filter((oferta)=> oferta.carrera == usuarioLogeado.carrera)
        console.log(ofertasFiltradasPorCarrera)
        console.log(usuarioLogeado.carrera)

        // Agregar buscador
        contenedorOfertas.innerHTML = `<span class="buscador">
                        <input type="text" id="inputBusqueda" class="inputBuscador" placeholder="Buscar por ciudad o carrera">
                        <button id="btnBuscar" class="btnBuscador">
                            <span class="material-symbols-outlined">search</span>
                        </button>
                    </span>`
        ofertasFiltradasPorCarrera.forEach(oferta => {
            const ofertaHTML = `
                <section class="ctnOfeta">
                    <span class="blockOferta1">
                        <h4 class="ofertaTitulo">${oferta.titulo}</h4>
                        <div class="fila gap-4 justify-start mt-4">
                            <div class="fila"> 
                                <svg width="30px" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                     <path d="M3 22V12C3 10.1144 3 9.17157 3.58579 8.58579C4.17157 8 5.11438 8 7 8C8.88562 8 9.82843 8 10.4142 8.58579C11 9.17157 11 10.1144 11 12" stroke="#1C274C" stroke-width="1.5"/>
                                     <path d="M17 22V16C17 14.1144 17 13.1716 16.4142 12.5858C15.8284 12 14.8856 12 13 12H11C9.11438 12 8.17157 12 7.58579 12.5858C7 13.1716 7 14.1144 7 16V22" stroke="#1C274C" stroke-width="1.5"/>
                                     <path d="M21 21.9999V7.77195C21 6.4311 21 5.76068 20.6439 5.24676C20.2877 4.73283 19.66 4.49743 18.4045 4.02663C15.9492 3.10591 14.7216 2.64555 13.8608 3.2421C13 3.83864 13 5.14974 13 7.77195V11.9999" stroke="#1C274C" stroke-width="1.5"/>
                                     <path d="M4 8V6.5C4 5.55719 4 5.08579 4.29289 4.79289C4.58579 4.5 5.05719 4.5 6 4.5H8C8.94281 4.5 9.41421 4.5 9.70711 4.79289C10 5.08579 10 5.55719 10 6.5V8" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                                     <path d="M7 4V2" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                                     <path d="M22 22L2 22" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                                     <path d="M10 15H14" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                                     <path d="M10 18H14" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                                     </svg>
                                <p class="texto-data"> ${oferta.direccion}</p>
                            </div>


                             <div class="ofertaEstado fila">
                                <svg width="30px" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                     <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="#1C274C" stroke-width="1.5"/>
                                     <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <p class="ofertaEstado texto-data">${oferta.estado}</p>
                             </div>

                             <div class="fila">
                                <svg width="30px" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.87 3.14669L10.6784 2.42157V2.42157L10.87 3.14669ZM13.13 3.14669L12.9384 3.87181V3.87181L13.13 3.14669ZM3.3835 16.403L4.10471 16.1972L3.3835 16.403ZM3.37998 10.9361L4.10118 11.1419L3.37998 10.9361ZM20.62 10.9361L21.3412 10.7303V10.7303L20.62 10.9361ZM20.6165 16.403L21.3377 16.6088L20.6165 16.403ZM15.9929 20.6187L15.8509 19.8822L15.9929 20.6187ZM8.00711 20.6187L8.1491 19.8822L8.00711 20.6187ZM8.77297 6.56041L8.91496 7.29685L8.77297 6.56041ZM15.227 6.56041L15.369 5.82397L15.227 6.56041ZM16.3006 6.7674L16.1586 7.50384V7.50384L16.3006 6.7674ZM20.527 10.6102L19.8058 10.816V10.816L20.527 10.6102ZM7.69941 6.7674L7.55742 6.03096L7.69941 6.7674ZM3.47297 10.6102L2.75176 10.4044H2.75176L3.47297 10.6102ZM11.0616 3.87181C11.6763 3.7094 12.3237 3.7094 12.9384 3.87181L13.3216 2.42157C12.4557 2.19281 11.5443 2.19281 10.6784 2.42157L11.0616 3.87181ZM16.927 7.06315C16.927 4.88128 15.4419 2.98176 13.3216 2.42157L12.9384 3.87181C14.4126 4.26128 15.427 5.57456 15.427 7.06315H16.927ZM8.57297 7.06315C8.57297 5.57455 9.58742 4.26128 11.0616 3.87181L10.6784 2.42157C8.55808 2.98176 7.07297 4.88127 7.07297 7.06315H8.57297ZM7.8414 7.50384L8.91496 7.29685L8.63098 5.82397L7.55742 6.03096L7.8414 7.50384ZM15.085 7.29685L16.1586 7.50384L16.4426 6.03096L15.369 5.82397L15.085 7.29685ZM19.8058 10.816L19.8988 11.1419L21.3412 10.7303L21.2482 10.4044L19.8058 10.816ZM4.10118 11.1419L4.19418 10.816L2.75176 10.4044L2.65877 10.7303L4.10118 11.1419ZM4.10471 16.1972C3.63385 14.5472 3.63087 12.79 4.10118 11.1419L2.65877 10.7303C2.11113 12.6493 2.1152 14.6917 2.66229 16.6088L4.10471 16.1972ZM19.8988 11.1419C20.3691 12.79 20.3662 14.5472 19.8953 16.1972L21.3377 16.6088C21.8848 14.6917 21.8889 12.6493 21.3412 10.7303L19.8988 11.1419ZM15.8509 19.8822C13.3077 20.3726 10.6923 20.3726 8.1491 19.8822L7.86512 21.3551C10.5959 21.8816 13.4041 21.8816 16.1349 21.3551L15.8509 19.8822ZM8.91496 7.29685C10.9524 6.90402 13.0477 6.90402 15.085 7.29685L15.369 5.82397C13.144 5.39498 10.856 5.39498 8.63098 5.82397L8.91496 7.29685ZM8.1491 19.8822C6.20493 19.5074 4.63939 18.0709 4.10471 16.1972L2.66229 16.6088C3.3533 19.0303 5.36966 20.874 7.86512 21.3551L8.1491 19.8822ZM16.1349 21.3551C18.6303 20.874 20.6467 19.0303 21.3377 16.6088L19.8953 16.1972C19.3606 18.0708 17.7951 19.5074 15.8509 19.8822L16.1349 21.3551ZM16.1586 7.50384C17.9164 7.84275 19.3239 9.12718 19.8058 10.816L21.2482 10.4044C20.6087 8.16326 18.747 6.47528 16.4426 6.03096L16.1586 7.50384ZM7.55742 6.03096C5.25297 6.47528 3.39132 8.16325 2.75176 10.4044L4.19418 10.816C4.67613 9.12717 6.08361 7.84275 7.8414 7.50384L7.55742 6.03096ZM3.38575 11.7917C8.93989 13.8462 15.0601 13.8462 20.6143 11.7917L20.0939 10.3849C14.8755 12.3151 9.12447 12.3151 3.90612 10.3849L3.38575 11.7917Z" fill="#363853"/>
                                    <path d="M8 10.5V14" stroke="#363853" stroke-width="1.5" stroke-linecap="round"/>
                                    <path d="M16 10.5V14" stroke="#363853" stroke-width="1.5" stroke-linecap="round"/>
                                    </svg>
                                <p class="ofertaModalidad texto-data">${oferta.modalidad}</p>
                             </div>

                             <div class="fila">
                                    <svg width="30px" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="6" r="4" stroke="#1C274C" stroke-width="1.5"/>
                                        <ellipse cx="12" cy="17" rx="7" ry="4" stroke="#1C274C" stroke-width="1.5"/>
                                        </svg>
                                    <p class="ofertaNumVacantes texto-data">${oferta.nVacantes} vacantes</p>
                             </div>

                             <div class="fila">
                                <svg width="30px" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 8C4 5.17157 4 3.75736 4.87868 2.87868C5.75736 2 7.17157 2 10 2H14C16.8284 2 18.2426 2 19.1213 2.87868C20 3.75736 20 5.17157 20 8V16C20 18.8284 20 20.2426 19.1213 21.1213C18.2426 22 16.8284 22 14 22H10C7.17157 22 5.75736 22 4.87868 21.1213C4 20.2426 4 18.8284 4 16V8Z" stroke="#1C274D" stroke-width="1.5"/>
                                    <path d="M19.8978 16H7.89778C6.96781 16 6.50282 16 6.12132 16.1022C5.08604 16.3796 4.2774 17.1883 4 18.2235" stroke="#1C274D" stroke-width="1.5"/>
                                    <path opacity="0.5" d="M8 7H16" stroke="#1C274D" stroke-width="1.5" stroke-linecap="round"/>
                                    <path opacity="0.5" d="M8 10.5H13" stroke="#1C274D" stroke-width="1.5" stroke-linecap="round"/>
                                    <path opacity="0.5" d="M19.5 19H8" stroke="#1C274D" stroke-width="1.5" stroke-linecap="round"/>
                                </svg>
                                <p class="ofertaTipoConvenio texto-data">${oferta.convenio}</p>  
                             </div>
                        </div>
                    </span>

                    <a class="ofertaBtnPostularse" onclick='postularOferta(${JSON.stringify(oferta)})'>Postularse</a>
                    <hr>
                    <span class="blockOferta2">
                        <p class="ofertaFecha">Fecha de inicio: ${oferta.fechaInicio} - Fecha de fin: ${oferta.fechaFin}</p>
                        <p class="ofertaCarrera"> ${oferta.carrera}</p>                        
                    </span>
                    <span class="blockOferta3">
                        <p class="ofertaDescripcion">${oferta.descripcion}</p>
                    </span>
                </section>
            `;
            contenedorOfertas.innerHTML += ofertaHTML;  
        });
    }


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

    // Cargar ofertas de prácticas
    mostrarOfertas()
})
