document.addEventListener("DOMContentLoaded", function () {
  const openNavBtn = document.querySelector(".open-nav-btn");
  const closeNavBtn = document.querySelector(".close-nav-btn");
  const mobileNavContainer = document.querySelector(".mobile-nav-container");
  const navigation = document.querySelector(".navigation"); /**scroll */
  const scrollThreshold = 2; /**scroll */
  const mobileBreakpoint = 1024; /**close ham at 1024px */

  /**open and close hamburger menu */
  function openMobileMenu() {
    mobileNavContainer.style.transform = "translateX(0)";
    openNavBtn.style.display = "none";
    closeNavBtn.style.display = "block";
    mobileNavContainer.style.display = "block";
  }

  function closeMobileMenu() {
    mobileNavContainer.style.transform = "translateX(-100%)";
    openNavBtn.style.display = "block";
    closeNavBtn.style.display = "none";
    mobileNavContainer.style.display = "none";
  }

  /**close the hamburger menu if 1024bp, change style wnen scrolled down 2px*/
  function toggleScrolledClass() {
    if (
      window.innerWidth >= mobileBreakpoint &&
      mobileNavContainer.classList.contains("show-mobile-menu")
    ) {
      closeMobileMenu();
    }

    if (window.scrollY >= scrollThreshold) {
      navigation.classList.add("scrolled");
    } else {
      navigation.classList.remove("scrolled");
    }
  }

  openNavBtn.addEventListener("click", openMobileMenu);
  closeNavBtn.addEventListener("click", closeMobileMenu);
  window.addEventListener("scroll", toggleScrolledClass); /**scroll */
  window.addEventListener("resize", function () {
    // Close mobile menu when window width is 1024px or higher
    if (window.innerWidth >= mobileBreakpoint) {
      closeMobileMenu();
    }
    toggleScrolledClass();
  });
});
