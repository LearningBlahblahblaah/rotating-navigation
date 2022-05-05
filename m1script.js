const menu = document.getElementById("menu");
const main = document.getElementById("main");
const icon = document.getElementById("icon");

let isMenuOpen = true;

// menu.addEventListener("mouseenter", () => {
//     let isMenuOpen = true;
//     main.classList.add("rotate");
// })

// menu.addEventListener("mouseleave", () => {
//     let isMenuOpen = false;
//     main.classList.remove("rotate")
// })

menu.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
        menu.classList.remove("rotate");
        main.classList.remove("rotate");
        icon.classList = "fa-solid fa-bars";
    } else {
        menu.classList.add("rotate")
        main.classList.add("rotate");
        icon.classList = "fa-solid fa-xmark";
    }

})