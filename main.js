window.addEventListener('DOMContentLoaded', () => {
  const bar = document.querySelector('.icon__link'),
    links = document.querySelectorAll('.nav__link'),
    nav = document.querySelector('.nav'),
    icon__bar = document.querySelector('.icon__link'),
    header = document.querySelector(".header"),
    booco__right = document.querySelector(".icon__right"),
    booco__left = document.querySelector(".icon__left"),
    carouselImages = document.querySelectorAll(".booco__gallery__inner"),
    smoothLinks = document.querySelectorAll('a[href^="#"]');

  /* Link Transition

  ***********************/

  for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener("click", (event) => {
      event.preventDefault();

      const e = event.target;

      const id = e.getAttribute("href");

      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
        block: 'start',
      });
    });
  }

  /* Carousel-Image

  ************************/

  var indexImage = 0;

  function activeImage(n) {
    for(var carousel of carouselImages) {
      carousel.classList.remove('active__image');
    }

    carouselImages[n].classList.add('active__image');
  }

  function rangeOfImage() {
    if (indexImage == carouselImages.length - 1) {
      indexImage = 0;
      activeImage(indexImage);
    } else {
      indexImage++;
      activeImage(indexImage);
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
  activeImage(indexImage);









    /* Nav Bar

  **********************/

  var i = 0;

  bar.addEventListener('click', () => {
    if (i % 2 == 0) {
      links.forEach((item) => {
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
      links.forEach((item) => {
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
