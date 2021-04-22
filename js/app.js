const grid = new Muuri('.galeria', {
    rounding: false
});

const btnMode = document.querySelector('#btn_mode');

btnMode.addEventListener('click', changeMode);

function changeMode() {
    btnMode.classList.toggle('btn-mode--dark-mode');
    document.body.classList.toggle('dark-mode');
}



const mainNav = document.querySelector('.main-nav');

mainNav.addEventListener('click', mostrarOcultar);

function mostrarOcultar(e) {
    e.preventDefault();
    //console.log(e.target.getAttribute('data-action'));
    if (e.target.getAttribute('data-action') == 'mostrar_ocultar') {
        // console.log(e.target.getAttribute('data-seccion'));
        let seccion = document.querySelector(`#${e.target.getAttribute('data-seccion')}`);

        for (let i = 0; i < seccion.parentElement.children.length; i++) {
            seccion.parentElement.children[i].classList.remove('show');
            seccion.parentElement.children[i].style.opacity = 0;
        }
        seccion.classList.add('show');
        setTimeout(() => {
            seccion.style.opacity = 1;
        }, 300);
        //console.log(e.target.parentElement.children);
        const enlaces = e.target.parentElement.children;
        for (let a = 0; a < enlaces.length; a++) {
            enlaces[a].classList.remove('main-nav__enlace--active');
        }
        e.target.classList.add('main-nav__enlace--active');
    }
}


const galleryNav = document.querySelector('#categorias');

galleryNav.addEventListener('click', filtradoGaleria);

function filtradoGaleria(e) {
    e.preventDefault();
    let enlace = e.target;
    document.querySelector('.nav-gallery__enlace--active').classList.remove('nav-gallery__enlace--active');
    enlace.classList.add('nav-gallery__enlace--active');
    let categoria = enlace.innerHTML.toLowerCase();
    categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
}

lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
})