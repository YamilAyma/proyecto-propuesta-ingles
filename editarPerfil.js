// Carga el usuario :: Obj JSON
// const usuario = JSON.parse(localStorage.getItem('usuario'))







// Obtener el rol para presentar el formulario con los datos cargados
const rol = usuario['rol']

const formPracticante = document.getElementById('formPracticante')
const formEmpresa = document.getElementById('formEmpresa')


// Ocultar formulario que no sea para el usuario
// Carga de datos
if(rol == "practicante"){
    formEmpresa.remove()
    const dniInput = document.getElementById("id");
    const nombreInput = document.getElementById("nombre");
    const apellidoInput = document.getElementById("apellidos");
    const telefonoInput = document.getElementById("telefono");
    const idCarreraInput = document.getElementById("idCarrera");
    const sedeInput = document.getElementById("sede");
    const emailInput = document.getElementById("correo");
    const passwordInput = document.getElementById("contrasena");

    const btnSalirAlumno = document.getElementById("btnSalirAlumno");


    dniInput.value = usuario.id;
    nombreInput.value = usuario.nombre;
    apellidoInput.value = usuario.apellidos;
    telefonoInput.value = usuario.telefono;
    idCarreraInput.value = usuario.idCarrera;
    sedeInput.value = usuario.sede;
    emailInput.value = usuario.correo;
    passwordInput.value = usuario.contrasena;
    
}else{
    formPracticante.remove()

    const rucInput = document.getElementById("id");
    const razonSocialInput = document.getElementById("razonSocial");
    const descripcionInput = document.getElementById("descripcion");
    const provinciaInput = document.getElementById("provincia");
    const distritoInput = document.getElementById("distrito");
    const departamentoInput = document.getElementById("departamento");
    const sectorInput = document.getElementById("sector");
    const telefonoInput = document.getElementById("telefono");
    const emailInput = document.getElementById("correo");
    const passwordInput = document.getElementById("contrasena");

    const btnSalirEmpresa = document.getElementById("btnSalirEmpresa");

    // Asignar valores de ejemplo
    rucInput.value = usuario.id;
    razonSocialInput.value = usuario.razonSocial;
    descripcionInput.value = usuario.descripcion;
    provinciaInput.value = usuario.provincia;
    distritoInput.value = usuario.distrito;
    departamentoInput.value = usuario.departamento;
    sectorInput.value = usuario.sector;
    telefonoInput.value = usuario.telefono;
    emailInput.value = usuario.correo;
    passwordInput.value = usuario.contrasena;
}
