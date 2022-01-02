const getMiddleElement = () => {
  const currentElem = document.querySelector(".slick-current .cardContainer");
  const cardMiddle = currentElem && currentElem.closest(".cardWrapper");
  const id = cardMiddle && cardMiddle.getAttribute("data-id");
  return id;
};
export default getMiddleElement;
