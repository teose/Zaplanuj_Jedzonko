//wywołanie slick -> galeria-karuzela
$(document).ready(function () {
  $('.multiple-items').slick({
    arrows: true,
    autoplay: true,
    accessibility: true,
    adaptiveHeight: true,
    centerMode: true,
    autoplaySpeed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
  });
})
// ______________________________