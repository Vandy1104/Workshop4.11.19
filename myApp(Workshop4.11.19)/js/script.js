console.log('curtain menu');

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

document.getElementById('closeNav').addEventListener('click',function(){
  closeNav();
});

document.getElementById('openNav').addEventListener('click',function(){
  openNav();
});

//LightBox script

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

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
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}

//Open Modal Slides
document.getElementById('openModalSlide1').addEventListener('click',function(){
  openModal();currentSlide(1);
});

document.getElementById('openModalSlide2').addEventListener('click',function(){
  openModal();currentSlide(2);
});

document.getElementById('openModalSlide3').addEventListener('click',function(){
  openModal();currentSlide(3);
});

document.getElementById('openModalSlide4').addEventListener('click',function(){
  openModal();currentSlide(4);
});

//close Modal
document.getElementById('closeModal').addEventListener('click',function(){
  closeModal();
});

//Previous / Next
document.getElementById('prev').addEventListener('click',function(){
  plusSlides(-1);
});

document.getElementById('next').addEventListener('click',function(){
  plusSlides(1);
});

//Current slides
document.getElementById('currentSlide(1)').addEventListener('click',function(){
  currentSlide(1);
});

document.getElementById('currentSlide(2)').addEventListener('click',function(){
  currentSlide(2);
});

document.getElementById('currentSlide(3)').addEventListener('click',function(){
  currentSlide(3);
});

document.getElementById('currentSlide(4)').addEventListener('click',function(){
  currentSlide(4);
});
