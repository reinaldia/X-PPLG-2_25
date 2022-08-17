const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.body.classList.toggle('disablescroll')
}); 


document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

$(document).ready(function(){

$("a").on('click', function(event) {

    if (this.hash !== "") {
    event.preventDefault();

    
    var hash = this.hash;
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 1000, function(){
        window.location.hash = hash;
    });
    }
});
});
