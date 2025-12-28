let lastScroll = 0;

const sky = document.querySelector(".sky");
const back = document.querySelector(".city-back");
const mid = document.querySelector(".city-mid");
const front = document.querySelector(".city-front");
const scene = document.querySelector(".scene");

const block = document.querySelector(".parallax-block");
const pBack = document.querySelector(".p-back");
const pFront = document.querySelector(".p-front");

window.addEventListener("scroll", () => {
  const s = window.scrollY;
  const delta = s - lastScroll;
  lastScroll = s;

  /* HERO PARALLAX */
  sky.style.transform = `translate(${s * 0.02}px, ${s * 0.1}px)`;
  back.style.transform = `translate(${s * 0.05}px, ${s * 0.25}px)`;
  mid.style.transform = `translate(${-s * 0.08}px, ${s * 0.45}px)`;
  front.style.transform = `translate(${s * 0.12}px, ${s * 0.7}px)`;

  /* CAMERA SHAKE */
  const shakeX = Math.sin(s * 0.05) * Math.min(Math.abs(delta), 5);
  const shakeY = Math.cos(s * 0.04) * Math.min(Math.abs(delta), 5);
  scene.style.transform = `translate(${shakeX}px, ${shakeY}px)`;

  /* CONTENT PARALLAX */
  const rect = block.getBoundingClientRect();
  const offset = -rect.top;

  pBack.style.transform = `translateY(${offset * 0.2}px)`;
  pFront.style.transform = `translateY(${offset * 0.5}px)`;
});
