document.addEventListener('DOMContentLoaded', () => {
    const dnavbarBurgers= Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    dnavbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const dtarget = document.getElementById(target);
        el.classList.toggle('is-active');
        dtarget.classList.toggle('is-active');
      });
    });
  });