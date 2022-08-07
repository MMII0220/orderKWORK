window.addEventListener('DOMContentLoaded', () => {
  const bar = document.querySelector('.icon__link'),
    links = document.querySelectorAll('.nav__link'),
    nav = document.querySelector('.nav'),
    icon__bar = document.querySelector('.icon__link'),
    header = document.querySelector(".header"),
    booco__right = document.querySelector(".icon__right"),
    booco__left = document.querySelector(".icon__left"),
    carouselImages = document.querySelectorAll(".booco__gallery__inner"),
    smoothLinks = document.querySelectorAll('a[href^="#"]'),
    arrowTop = document.querySelector(".arrowTop"),
    addvantageIcon = document.querySelectorAll(".advantage__blocks"),
    addvantageRight = document.querySelector(".advantage--icon__right"),
    addvantageLeft = document.querySelector(".advantage--icon__left");

  /* Стрелка вверх, кликаем идет вверх

  ***********************************************/

  var scrolled, timer;

  arrowTop.addEventListener("click", () => {
    scrolled = window.pageYOffset;

    moveTop();
  });

  function moveTop() {
    if (scrolled > 0) {
      window.scrollTo(0, scrolled);
      scrolled = scrolled - 100;
      timer = setTimeout(moveTop, 10);
    } else {
      clearTimeout(timer);
      window.scrollTo(0, 0);
    }
  }

  // Стрелка Вверх, появление и исчезновение

  function arrowTopApp() {
    if (window.pageYOffset > document.documentElement.clientHeight - 100) {
      arrowTop.style.display = "block";
    } else {
      arrowTop.style.display = "none";
    }
  }

  window.addEventListener("scroll", arrowTopApp);

  /* Позиционирование header ставляем fixed

  **********************************************/

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 0) {
      header.style.position = "fixed";
      header.style.paddingBottom = "2%";
      header.style.animationName = "fade";
      header.style.animationDuration = "1s";
    } else {
      header.style.position = "sticky";
      header.style.paddingBottom = "1%";
      header.style.animationName = "";
      header.style.animationDuration = "";
    }
  });

  /* Link Moving down and transtiton

  ***********************/

  for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener("click", (event) => {
      event.preventDefault();

      const e = event.target;

      const id = e.getAttribute("href");

      if (id) {
        document.querySelector(id).scrollIntoView({
          behavior: "smooth",
          block: 'start',
        });
      } else {
        // Перезагрежает страницу, если не находит ссылку

        location.href = location.href;
      }
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

  function plusImage() {
    if (indexImage == carouselImages.length - 1) {
      indexImage = 0;
      activeImage(indexImage);
    } else {
      indexImage++;
      activeImage(indexImage);
    }
  }

  function minusImage() {
    if (indexImage == 0) {
      indexImage = carouselImages.length - 1;
      activeImage(indexImage);
    } else {
      indexImage--;
      activeImage(indexImage);
    }
  }

  function nextImage() {
    booco__right.addEventListener("click", plusImage);
  }

  function prevImage() {
    booco__left.addEventListener("click", minusImage);
  }

  
  /* Advantage, Carousel переход иконок.

  ********************************************/

  var indexIcon = 0;

  function replaceActiveIcon(n) {
    addvantageIcon[n].classList.remove("active__icon");
    addvantageIcon[n.length - 1].classList.add("active__icon");
  }

  function plusIcon() {
    if (indexIcon == addvantageIcon.length - 1) {
      indexIcon = 0;
      replaceActiveIcon(indexIcon);
    } else {
      indexIcon++;
      replaceActiveIcon(indexIcon);
    }
  }

  function minusIcon() {
    if (indexIcon == 0) {
      indexIcon = addvantageIcon.length - 1;
      replaceActiveIcon(indexIcon);
    } else {
      indexIcon--;
      replaceActiveIcon(indexIcon);
    }
  }

  function nextIcon() {
    addvantageRight.addEventListener("click", plusIcon);
  }

  function prevIcon() {
    addvantageRight.addEventListener("click", minusIcon);
  }

  nextIcon();
  prevIcon();







  /* Images go Next every 5 sec */

  setInterval(plusImage, 5000);

  nextImage();
  prevImage();

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
        header.style.background = "aliceblue";
        icon__bar.innerHTML = '<i class="fa-solid fa-bars">';
      });
    }

    i++;
  });
});
