var slideIndex = 1;
showsSlides(slideIndex);

function plussSlides(n){
    showsSlides(slideIndex += n);
}
function currenttSlides(n){
    showsSlides(slideIndex = n);

}
 function showsSlides(n){
     var i;
     var slidess = document.getElementsByClassName("mySlide");
     var dotss = document.getElementsByClassName("dots");
     if(n>slidess.length){
         slideIndex = 1;
     }
     if(n < 1){
         slideIndex = slidess.length
     }
     for(i=0;i<slidess.length;i++){
         slidess[i].style.display = "none";
     }
     for(i=0;i<dotss.length;i++){
         dotss[i].className = dotss[i].className.replace(" active" , "");
     }
     slidess[slideIndex - 1].style.display = "block";
     dotss[slideIndex - 1].className +=" active";
 }