const usuarios = [
    {
        id: '1',
        nombre: "Ana Manala",
        apellidos: "Hernandez Fernandez",
        telefono: '998882199',
        carrera: 'Ingenieria de Software con Inteligencia Artificial',
        sede: 'Independencia',
        correo: "anamanala@gmail.com",
        contrasena: "practicante1",
        rol: "practicante"
    },
    {
        id: '2',
        nombre: "Carlos Pérez",
        apellidos: "Gómez Sánchez",
        telefono: '987654321',
        carrera: 'Ingenieria de Software con Inteligencia Artificial',
        sede: 'San Juan de Lurigancho',
        correo: "carlosperez@gmail.com",
        contrasena: "practicante2",
        rol: "practicante"
    },
    {
        id: '3',
        nombre: "Lucía Rodríguez",
        apellidos: "Martínez Castro",
        telefono: '965478321',
        carrera: 'Ingenieria de Software con Inteligencia Artificial',
        sede: 'Villa El Salvador',
        correo: "luciarodriguez@gmail.com",
        contrasena: "practicante3",
        rol: "practicante"
    },
    {
        id: '4',
        nombre: "Fernando Gutiérrez",
        apellidos: "López Ramírez",
        telefono: '912345678',
        sede: 'Independencia',
        carrera:"Diseño Gráfico Digital",
        correo: "fernandogutierrez@gmail.com",
        contrasena: "practicante4",
        rol: "practicante"
    },
    {
        id: '5',
        nombre: "María Torres",
        apellidos: "Díaz Morales",
        telefono: '956321478',
        carrera: 'Diseño Gráfico Digital',
        sede: 'San Juan de Lurigancho',
        correo: "mariatorres@gmail.com",
        contrasena: "practicante5",
        rol: "practicante"
    },
    // EMPRESAS
    {
        id: "101",
        razonSocial: "Flores y Tech",
        descripcion: "Empresa dedicada a la distribución de equipos de informática...",
        provincia: "Lima",
        distrito: "Lima",
        departamento: "Lima",
        sector: "Tecnología",
        telefono: "982828212",
        correo: "flores@mail.com",
        contrasena: "empresa1",
        rol: "empresa"
    },
    {
        id: "102",
        razonSocial: "Construcciones del Futuro",
        descripcion: "Empresa líder en el sector de construcción de infraestructuras.",
        provincia: "Callao",
        distrito: "Callao",
        departamento: "Callao",
        sector: "Construcción",
        telefono: "981112233",
        correo: "construcciones@mail.com",
        contrasena: "empresa2",
        rol: "empresa"
    },
    {
        id: "103",
        razonSocial: "EcoVerde",
        descripcion: "Empresa enfocada en soluciones ecológicas y energías renovables.",
        provincia: "Arequipa",
        distrito: "Cercado",
        departamento: "Arequipa",
        sector: "Energía",
        telefono: "977445566",
        correo: "ecoverde@mail.com",
        contrasena: "empresa3",
        rol: "empresa"
    },
    {
        id: "104",
        razonSocial: "Moda Express",
        descripcion: "Tienda de moda y confección con más de 10 años en el mercado.",
        provincia: "Cusco",
        distrito: "Wanchaq",
        departamento: "Cusco",
        sector: "Moda",
        telefono: "965554433",
        correo: "modaexpress@mail.com",
        contrasena: "empresa4",
        rol: "empresa"
    },
    {
        id: "105",
        razonSocial: "AgroPeru",
        descripcion: "Empresa agrícola especializada en exportación de productos peruanos.",
        provincia: "La Libertad",
        distrito: "Trujillo",
        departamento: "La Libertad",
        sector: "Agricultura",
        telefono: "974332211",
        correo: "agroperu@mail.com",
        contrasena: "empresa5",
        rol: "empresa"
    }
];


function setupUsuarios(){
    if(!localStorage.getItem('usuarios')){

        localStorage.setItem('usuarios', JSON.stringify(usuarios))
    }
}
function obtenerUsuarios(){
    return JSON.parse(localStorage.getItem('usuarios'))
}

function agregarUsuario(nuevoUsuario){
    const usuariosMemoria = obtenerUsuarios()
    usuariosMemoria.push(nuevoUsuario)
    localStorage.setItem('usuarios', JSON.stringify(usuariosMemoria))
}
