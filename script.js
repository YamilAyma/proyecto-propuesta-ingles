const $ = el=> document.querySelector(el)


setupOfertasPractica()


// POR DEFECTO LA PAGINA FUE ESTABLECIDA EN MODO OSCURO(PREFERENCIA DEL DESARROLLADOR JPFT)
// Al momento de cargar la pagina se establece el modo que se guarda en el LocalStorage
document.addEventListener("DOMContentLoaded", () => {
    // Modo oscuro
    const theme = $('#theme');
    
    console.log("COLOCANDO TEMA")
    const getTheme = localStorage.getItem('theme');         //Obtenemos el valor del item'Tema' que alberga que tema tiene
    if (getTheme === 'light') {                             //Condicional para establecer el tema
        document.body.classList.add('light-mode');
    }else{  
        document.body.classList.remove('light-mode');
    }


    // Ocultar los elementos de Login/Registrarse si ya hay un usuario en la sesion
    const usuario = localStorage.getItem('usuario')
    if(usuario){
        // Ocultar elementos que no necesita ver el usuario porque ya inició sesión
        for(let elemento of document.querySelectorAll(".sin-login")){
            elemento.classList.toggle("invisible")
        }
    }


    // Al hacer click al boton tema
    // Se coloca aquí debido a la carga de la página en la redirección
    theme.addEventListener('click',()=>{
        console.log("CAMBIANDO TEMA")
        const isTheme = document.body.classList.toggle('light-mode');   //Agrega o quita el tema oscuro o claro (si ya lo tiene lo quita - si no lo agrega)
        localStorage.setItem('theme', isTheme ? 'light' : 'dark');      //Establece el nuevo valor del tema (oscuro o claro) segun el caso
    })
});




const btnMenu = $('#btnMenu')
const listaNav = $('#listaNav')


btnMenu.addEventListener('click',()=>{
    listaNav.classList.toggle('listaNav-act')
});