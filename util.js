const hamburgersa = document.querySelector(".hamburgersa");
const navMenu = document.querySelector(".nav-menu");

hamburgersa.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburgersa.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    document.getElementById("lineas3").innerHTML = "&#9776";
    estadoActual = 1;
    hamburgersa.classList.remove("active");
    navMenu.classList.remove("active");    
}


const lineas3 = document.getElementById("lineas3");
let estadoActual = 1;
lineas3.addEventListener("click", function () {
    if (estadoActual === 1) {
        lineas3.innerHTML = "&#10005";
        estadoActual = 2;
    } else {
        lineas3.innerHTML = "&#9776";
        estadoActual = 1;
    }
});
