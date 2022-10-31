// Mobile responsive menu
const menu = document.getElementById("barbox");
const view =document.querySelector(".nav__Mobilelinks");

function controller() {
    view.classList.toggle("show");
    menu.classList.toggle("change")
}

menu.addEventListener("click", function (e) {
    e.preventDefault()
    controller();
})


// slider images
const productContainers = [...document.querySelectorAll('.product-image')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
    
});