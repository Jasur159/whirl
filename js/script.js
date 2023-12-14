const offerCard = document.querySelectorAll(".offer_card");
offerCard.forEach((card) => {
  const arrowBtn = card.querySelector("i");
  arrowBtn.addEventListener("click", () => {
    card.classList.toggle("active");
  });
});
