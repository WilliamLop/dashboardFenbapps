const iconOpenMenu = document.getElementById('menu');
const navContainer = document.querySelector('.nav__container');
const navContainerMask = document.querySelector('.nav__content--mask');
const iconCloseMenu = document.querySelector('.box__close');
const btnsHeader = document.querySelector('.header__content--btns');
const navLinks = document.querySelectorAll('.nav__link');
const mainContainer = document.querySelector('.main__container');


// Evento para abrir mi modal de menu
iconOpenMenu.addEventListener('click', (e) => {
    e.preventDefault();
    navContainer.classList.add('nav__container--show');
    navContainerMask.classList.add('nav__content--mask--active');
    btnsHeader.classList.add('filters');
    mainContainer.classList.add('filters');
    
});

// Evento para cerrar mi modal de menu
iconCloseMenu.addEventListener('click', (e) => {
    e.preventDefault();
    navContainer.classList.remove('nav__container--show');
    navContainerMask.classList.remove('nav__content--mask--active');
    btnsHeader.classList.remove('filters');
    mainContainer.classList.remove('filters');
})


// Funcion para ciclar el link activo con los elementos de navegacion
const removeActiveElements = (selector) => {
    const linksActive = document.querySelectorAll(`.${selector}`);

    if (linksActive.length) {
        linksActive.forEach(linksActive => {
            linksActive.classList.remove(selector);
        });
    }
}


//Recupero todos mis links para iterarlos, incorporar un evento, una estructura de control

navLinks.forEach((link, i) => {
    link.addEventListener('click', (e) =>{
        e.preventDefault();
        if(!link.classList.contains('nav__link--active')){
            removeActiveElements('nav__link--active');
            link.classList.add('nav__link--active');
        }
    });
    link.addEventListener('mouseover', (e) =>{
        if(!link.classList.contains('nav__link--active')){
            removeActiveElements('nav__link--active');
            link.classList.add('nav__link--active');
        }
    });
    link.addEventListener('mouseout', (e) =>{
        removeActiveElements('nav__link--active');
        document.querySelector('.home-link').classList.add('nav__link--active');
    });
});

const SpanTotalFollowers = document.querySelector('.span__total');

const followersValues =[...document.querySelectorAll('.text__followers')]
.map(element => parseInt(element.textContent.replace(/,/g, ''),10));

const totalFollowers = followersValues.reduce((sum, value) => sum + value, 0);

formattedFollowers = totalFollowers.toLocaleString()

SpanTotalFollowers.textContent = formattedFollowers;



const darkMode = document.querySelector('.switch');
console.log(darkMode);

darkMode.addEventListener('click', (e) =>{
    document.body.classList.toggle('dark-moderate');
    darkMode.querySelector('i:nth-child(1)').classList.toggle('fa__active');
    darkMode.querySelector('i:nth-child(2)').classList.toggle('fa__active');
})