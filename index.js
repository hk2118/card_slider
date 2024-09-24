document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.transform = "translateX(-100vw)";
    }, index * 500); // Adjust timing as needed
  });
});
