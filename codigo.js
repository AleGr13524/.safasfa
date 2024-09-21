const hamburgerMenu = document.querySelector(".hamburger-menu");
const menuNavbar = document.querySelector(".menu");
const closeMenu = document.querySelector(".close-menu");

hamburgerMenu.addEventListener("click", ()=>{
        menuNavbar.removeAttribute("id","oculto")
        closeMenu.removeAttribute("id", "oculto")
})
closeMenu.addEventListener("click", ()=>{
    menuNavbar.setAttribute("id","oculto")
    closeMenu.setAttribute("id", "oculto")
})