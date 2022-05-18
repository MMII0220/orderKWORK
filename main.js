window.addEventListener('DOMContentLoaded', () => {
  const bar = document.querySelector('.icon__link'),
    link = document.querySelectorAll('.nav__link');

  let i = 0;

  bar.addEventListener('click', () => {
    if (i % 2 == 0) {
      link.forEach((item) => {
        item.classList.remove('hide');
      });
    } else {
      link.forEach((item) => {
        item.classList.add('hide');
      });
    }

    i++;
  });
});
