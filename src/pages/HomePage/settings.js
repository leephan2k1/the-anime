export const mainCarousel = {
  className: "center",
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: true,
  afterChange: function () {
    const currentElem = document.querySelector(".slick-current .cardContainer");
    if (currentElem) {
      const allCards = document.querySelectorAll(".cardContainer");
      allCards.forEach((elem) => {
        elem.style.cssText = "transform: translateY(0);";
      });
      currentElem.style.cssText = "transform: translateY(-100px);";
    }
  },
  centerPadding: "0",
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
