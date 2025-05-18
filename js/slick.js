$(function () {
  $(".e-d-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    cssEase: "linear",
    prevArrow: ".e-d-reviews-list-left",
    nextArrow: ".e-d-reviews-list-right",
  });
});
