let slideIndex = 0;
showSlides();

function showSlides(){
    let slides = document.getElementsByClassName("slides");
    for(let i = 0; i <slides.length; i++){
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length) {
        slideIndex = 1}
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 4000);
    }

function plusSlides(n){
    slideIndex += n - 1;
    showSlides();
}

document.addEventListener('DOMContentLoaded', showSlides);