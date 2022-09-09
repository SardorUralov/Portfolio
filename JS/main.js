let navHeader = document.querySelector(".header");
let navBtn = document.querySelector(".header-item__menu");


navBtn.addEventListener("click", function() {
    navHeader.classList.toggle("active")
})