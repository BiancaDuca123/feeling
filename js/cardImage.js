// feelingImages.js
document.addEventListener("DOMContentLoaded", function () {
  const feelingImageMap = {
    happiness: "../img/happiness.webp",
    sadness: "../img/sadness.webp",
    anger: "../img/anger.webp",
    fear: "../img/fear.webp",
    love: "../img/love.webp",
  };

  for (const feeling in feelingImageMap) {
    // Find the card matching the feeling class
    const card = document.querySelector(`.feeling-card.${feeling}`);
    if (card) {
      // Inject the background image
      card.style.background = `url('${feelingImageMap[feeling]}') center/cover no-repeat`;
    }
  }
});
