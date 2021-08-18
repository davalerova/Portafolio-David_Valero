const iconoMenu = document.querySelector("#icono-menu"),
    menu = document.querySelector("#menu");

    menu.addEventListener("click", (e) =>{
        menu.classList.toggle('active');
    });

iconoMenu.addEventListener('click', (e) =>{

    // Alternamos estilos para el menú y body
    menu.classList.toggle('active');
    // document.body.classList.toggle('opacity'); 

    // Alternamos su atributo 'src' para el ícono del menú
    const rutaActual = e.target.getAttribute('src');

    if(rutaActual == 'assets/img/open-menu.png'){
        e.target.setAttribute('src', 'assets/img/open-menu.png')
    }else{
        e.target.setAttribute('src', 'assets/img/open-menu2.png')
    }
})