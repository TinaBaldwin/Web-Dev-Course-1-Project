console.log ('javascript loaded');


const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');



hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("open")
    nav.classList.toggle('navbar')
});

