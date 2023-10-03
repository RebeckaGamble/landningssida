document.addEventListener("DOMContentLoaded", function () {
  const openNavBtn = document.querySelector(".open-nav-btn");
  const closeNavBtn = document.querySelector(".close-nav-btn");
  const mobileNavContainer = document.querySelector(".mobile-nav-container");

  function openMobileMenu() {
    mobileNavContainer.style.transform = "translateX(0)";
    openNavBtn.style.display = "none";
    closeNavBtn.style.display = "block";
  }

  function closeMobileMenu() {
    mobileNavContainer.style.transform = "translateX(-100%)";
    openNavBtn.style.display = "block";
    closeNavBtn.style.display = "none";
  }
  openNavBtn.addEventListener("click", openMobileMenu);
  closeNavBtn.addEventListener("click", closeMobileMenu);
});
