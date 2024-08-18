document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  // gsap code here!
  gsap.to("h1.banner-title", {
    y: 500,
    scale: 2,
    scrollTrigger: {
      trigger: ".banner-img",
      start: "top 50%",
      scrub: 1,
    },
  });

  gsap.to(".banner-img", {
    y: 500,
    x: -200,
    // scale: 2,
    scrollTrigger: {
      trigger: ".banner-img",
      start: "top 50%",
      scrub: 1,
    },
  });
});
