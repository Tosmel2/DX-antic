// Mobile responsive menu

const menu = document.getElementById("barbox");
const view =document.querySelector(".nav__Mobilelinks");

function controller() {
    view.classList.toggle("show");
    backdrop.classList.toggle("show");
    menu.classList.toggle("change")
}

menu.addEventListener("click", function (e) {
    e.preventDefault()
    controller();
})
