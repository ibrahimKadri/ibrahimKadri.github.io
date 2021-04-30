/*************************************************FAQ**************************/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
// شيفرة الشرط الخاصة بتشغيل الفيديو
var myVideo = document.getElementById("video11"); 

function playPause() { 
    if (myVideo.paused) 
        myVideo.play();
    else 
        myVideo.pause(); 
}
// شيفرة الشرط الخاصة بتشغيل الفيديو
var myVideo = document.getElementById("video1"); 

function playPause() { 
    if (myVideo.paused) 
        myVideo.play();
    else 
        myVideo.pause(); 
}