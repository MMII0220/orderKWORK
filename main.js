window.addEventListener('DOMContentLoaded', () => {
  const bar = document.querySelector('.icon__link'),
    link = document.querySelectorAll('.nav__link'),
    nav = document.querySelector('.nav'),
    icon__bar = document.querySelector('.icon__link'),
    header = document.querySelector(".header"),
    booco__right = document.querySelector(".icon__right"),
    booco__left = document.querySelector(".icon__left"),
    carouselImages = document.querySelectorAll(".booco__gallery__inner");

  /* Carousel-Image

  ************************/
  var index = 0;

  function activeImage(n) {
    for(carousel of carouselImages) {
      carousel.classList.remove('active__image');
    }

    carouselImages[n].classList.add('active__image');
  }

  function rangeOfImage() {
    if (index == carouselImages.length - 1) {
      index = 0;
      activeImage(index)
    } else {
      index++;
      activeImage(index)
    }
  }

  function nextImage() {
    booco__right.addEventListener("click", rangeOfImage);
  }

  function prevImage() {
    booco__left.addEventListener("click", rangeOfImage);
  }

  nextImage();
  prevImage();
  rangeOfImage();
  activeImage(index);









    /* Nav Bar

  **********************/

  var i = 0;

  bar.addEventListener('click', () => {
    if (i % 2 == 0) {
      link.forEach((item) => {
        item.classList.remove('hide');
        nav.style.backgroundColor = '#2fbaff';
        nav.style.position = 'absolute';
        nav.style.height = '100vh';
        nav.style.animationName = 'fade';
        nav.style.animationDuration = '.3s';
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        header.style.background = "rgba(0,0,0,0.4)";
        icon__bar.innerHTML =
          '<i class="fa-solid fa-x" style="font-size: calc(16px + 1vh);"></i>';
      });
    } else {
      link.forEach((item) => {
        item.classList.add('hide');
        nav.style.position = 'unset';
        nav.style.height = '0';
        nav.style.animation = 'none';
        nav.style.background = 'none';
        document.body.style.backgroundColor = "white";
        header.style.background = "white";
        icon__bar.innerHTML = '<i class="fa-solid fa-bars">';
      });
    }

    i++;
  });
});
