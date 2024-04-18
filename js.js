let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 7000);
  // Changes image every 7 seconds
}

function openModal(imageSrc, captionText) {
  let modal = document.getElementById("myModal");
  let modalImg = document.getElementById("modalImage");
  let caption = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = imageSrc;
  caption.innerHTML = captionText;
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}