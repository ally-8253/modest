$('.menu-hidden-btn').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('menu-hidden-btn-active');
  $('.menu-nav').toggleClass('menu-nav-active');
});