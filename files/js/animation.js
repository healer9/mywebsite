const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    // toggle nav
    nav.classList.toggle("nav-active");

    // Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });

    // burger animation
    burger.classList.toggle("toggle");
  });
};
navSlide();

function scrollAppear() {
  let introText = document.querySelector(".intro-text");
  let introPosition = introText.getBoundingClientRect().top;
  // console.log("position " + introPosition);
  let screenPosition = window.innerHeight / 1.3;

  if (introPosition < screenPosition) {
    introText.classList.add("intro-appear");
  }
}

window.addEventListener("scroll", scrollAppear);
