var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
/*********************************************************************************/

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
/*********************************************************************************/
$(document).ready(function(){
  $("a.scroll").on('click', function(event) {

    var hash = this.hash;

    $('html, body').animate({ scrollTop: $(hash).offset().top - 90 }, 1000, function(){});

});
$('.circle').circleProgress({
  startAngle: -Math.PI / 2,
  fill: "#0575e6",
}).on('circle-animation-progress', function(event, progress, stepValue) {
  $(this).find('span').html(Math.round(stepValue * 100) + '%');
});
});