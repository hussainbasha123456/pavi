setTimeout(() => {
  document.getElementById("intro").style.display = "none";
  document.getElementById("content").classList.remove("hidden");
}, 5000); // intro video duration

function openGift() {
  document.getElementById("content").classList.add("hidden");
  document.getElementById("gift").classList.remove("hidden");
}

function openShop() {
  document.getElementById("shop").classList.toggle("hidden");
}