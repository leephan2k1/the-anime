const handleMainCarouselCSS = () => {
  const currentElem = document.querySelector(".slick-current .cardContainer");
  if (currentElem) {
    const allCards = document.querySelectorAll(".carouselMain .cardContainer");
    allCards.forEach((elem) => {
      elem.style.cssText = "transform: translateY(0);";
      elem.classList.add("overlay");
    });

    currentElem.style.cssText = "transform: translateY(-100px);";
    currentElem.classList.remove("overlay");
  }
};
export default handleMainCarouselCSS;
