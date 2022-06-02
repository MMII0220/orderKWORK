window.addEventListener('DOMContentLoaded', () => {
  const bar = document.querySelector('.icon__link'),
    link = document.querySelectorAll('.nav__link'),
    nav = document.querySelector('.nav'),
    icon__bar = document.querySelector('.icon__link');

  let i = 0;

  bar.addEventListener('click', () => {
    if (i % 2 == 0) {
      link.forEach((item) => {
        item.classList.remove('hide');
        nav.style.backgroundColor = '#2fbaff';
        nav.style.position = 'absolute';
        nav.style.height = '100vh';
        nav.style.animationName = 'fade';
        nav.style.animationDuration = '.3s';
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
        icon__bar.innerHTML = '<i class="fa-solid fa-bars">';
      });
    }

    i++;
  });
});
