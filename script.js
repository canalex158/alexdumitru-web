// Año automático del footer

document.getElementById("year").textContent = new Date().getFullYear();


// Animaciones al hacer scroll

const elementos = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);

elementos.forEach((elemento) => {

    observer.observe(elemento);

});


// Header efecto al hacer scroll

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.position = "fixed";

        header.style.background = "rgba(245,245,242,0.88)";

        header.style.backdropFilter = "blur(15px)";

        header.style.borderBottom = "1px solid rgba(0,0,0,0.08)";

    } else {

        header.style.position = "absolute";

        header.style.background = "transparent";

        header.style.backdropFilter = "none";

        header.style.borderBottom = "none";

    }

});
