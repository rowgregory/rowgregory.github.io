$(document).ready(function () {
  $('.scrollspy').scrollSpy();
});

$(window).scroll(() => {
  const navbar = document.getElementById('navbarsticky');
  const scroll = $(window).scrollTop();

  if (scroll > window.innerHeight) {
    navbar.classList.add('makesticky');
    navbar.classList.remove('unstick');
  } else {
    navbar.classList.add('unstick');
    navbar.classList.remove('makesticky');
  }
});

AOS.init();
