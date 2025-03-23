// Registro

const btnAlumno = $('#btnAlumno')
const btnEmpresa = $('#btnEmpresa')
const btnSalirAlumno = $('#btnSalirAlumno')
const btnSalirEmpresa = $('#btnSalirEmpresa')

const formAlumnos = $('#form_registrerAlumnos')
const formEmpresas = $('#form_registrerEmpresas')
const boxElegir = $('#boxElegir')


btnAlumno.addEventListener('click',()=>{
    boxElegir.style.display='none';
    formAlumnos.style.display='flex';
})


btnEmpresa.addEventListener('click',()=>{
    boxElegir.style.display='none';
    formEmpresas.style.display='flex';
})

btnSalirAlumno.addEventListener('click', () => {
    boxElegir.style.display = 'flex';
    formAlumnos.style.display = 'none';
});

btnSalirEmpresa.addEventListener('click', () => {
    boxElegir.style.display = 'flex';
    formEmpresas.style.display = 'none';
});

