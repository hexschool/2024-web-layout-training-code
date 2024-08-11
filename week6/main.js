import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

console.log("Hello world!");

const swiper = new Swiper(".project-swiper", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 0,
});
