var slideIndex = 1;
showssSlides(slideIndex);

function plusssSlides(n){
    showssSlides(slideIndex += n);
}
function currentttSlides(n){
    showssSlides(slideIndex = n);

}
 function showssSlides(n){
     var i;
     var slides = document.getElementsByClassName("mySlidess");
     var dots = document.getElementsByClassName("dotss");
     if(n>slides.length){
         slideIndex = 1;
     }
     if(n < 1){
         slideIndex = slides.length
     }
     for(i=0;i<slides.length;i++){
         slides[i].style.display = "none";
     }
     for(i=0;i<dots.length;i++){
         dots[i].className = dots[i].className.replace(" active" , "");
     }
     slides[slideIndex - 1].style.display = "block";
     dots[slideIndex - 1].className +=" active";
 }