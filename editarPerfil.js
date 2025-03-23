// Carga el usuario :: Obj JSON
// const usuario = JSON.parse(localStorage.getItem('usuario'))

function guardarDatosEmpresa(){
    const formEmpresa = document.getElementById("formEmpresa");

    formEmpresa.addEventListener("submit", (event) => {
      event.preventDefault(); // Evita que se recargue la página
    
      const formData = new FormData(formEmpresa);
      const datos = Object.fromEntries(formData.entries()); // Convierte FormData en un objeto
    
      localStorage.setItem('usuario', JSON.stringify(datos))
    //   Redirigir a la vista de acceso
        reemplazarUrl('index.html')
    });    
}

function guardarDatosPracticante(){
    const formEmpresa = document.getElementById("formPracticante");

    formEmpresa.addEventListener("submit", (event) => {
      event.preventDefault(); // Evita que se recargue la página
    
      const formData = new FormData(formEmpresa);
      const datos = Object.fromEntries(formData.entries()); // Convierte FormData en un objeto
    
      localStorage.setItem('usuario', JSON.stringify(datos))
    //   Redirigir a la vista de acceso
      reemplazarUrl('index.html')
    });    

}



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
// Obtener el rol para presentar el formulario con los datos cargados
const rol = usuario['rol']

const formPracticante = document.getElementById('formPracticante')
const formEmpresa = document.getElementById('formEmpresa')

// Guardar los datos 
formEmpresa.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita que se recargue la página
  
    const formData = new FormData(formEmpresa);
    const datos = Object.fromEntries(formData.entries()); // Convierte FormData en un objeto
  
    localStorage.setItem('usuario', JSON.stringify(datos))
  });  

formPracticante.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita que se recargue la página

    const formData = new FormData(formEmpresa);
    const datos = Object.fromEntries(formData.entries()); // Convierte FormData en un objeto

    localStorage.setItem('usuario', JSON.stringify(datos))
}); 

// Ocultar formulario que no sea para el usuario
// Carga de datos
if(rol == "practicante"){
    formEmpresa.remove()
    const dniInput = document.getElementById("id");
    const nombreInput = document.getElementById("nombre");
    const apellidoInput = document.getElementById("apellido");
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
