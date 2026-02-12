// ⏳ Intro video duration (milliseconds)
// Change this to match your intro video length
const INTRO_DURATION = 5000;

setTimeout(() => {
  const intro = document.getElementById("intro");
  const content = document.getElementById("content");

  if (intro) intro.style.display = "none";
  if (content) content.classList.remove("hidden");
}, INTRO_DURATION);

// 🎁 Open Gift Video
function openGift() {
  const content = document.getElementById("content");
  const gift = document.getElementById("gift");

  if (content) content.classList.add("hidden");
  if (gift) gift.classList.remove("hidden");

  // Scroll to top for better mobile experience
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// 🛍️ Toggle Shop Section
function openShop() {
  const shop = document.getElementById("shop");

  if (shop) {
    shop.classList.toggle("hidden");

    shop.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}