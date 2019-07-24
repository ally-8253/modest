$('.menu-hidden-btn').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('menu-hidden-btn-active');
  $('.menu-nav').toggleClass('menu-nav-active');
});

const anchors = document.querySelectorAll('nav a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href");

    if (anchor.getAttribute("href") === "#") {
      document.querySelector("body").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    } else {
      document.querySelector("" + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    for (let link of anchors) {
      if (link.getAttribute("href") === blockID) {
        link.className = "nav-btn-active";
      } else {
        link.className = "nav-btn";
      }
    }
  });
}

let sections = document.querySelectorAll('section');

document.addEventListener('scroll', () => {
  sections.foreach(section => {
     if (
  section.getBoundingClientRect().top < window.clientHeight / 3
  ) {
  for (let link of anchors) {
          if (link.getAttribute("href") === section.id) {
             link.className = "nav-btn-active";
          } else {
             link.className = "nav-btn";
          }
        }  
      }
  })
});