document.addEventListener('DOMContentLoaded', function () {
  var toggler = document.querySelector('.navbar-toggler');
  var nav = document.getElementById('navigation');
  if (!toggler || !nav) return;
  toggler.addEventListener('click', function () {
    toggler.setAttribute('aria-expanded', nav.classList.toggle('show'));
  });
});
