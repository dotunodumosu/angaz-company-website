const slider = document.getElementById("slider");
const bttn_left = document.getElementById("slider__bttn--left");
const bttn_right = document.getElementById("slider__bttn--right");
const items = document.querySelectorAll(".slider__item");

let current_slide = 0,
  swipe_start,
  swipe_end;

slider.addEventListener("mousedown", e => {
  e.preventDefault;
  swipe_start = e.pageX;
});

slider.addEventListener("mouseup", e => {
  e.preventDefault;
  swipe_end = e.pageX;
  swipe = swipe_end - swipe_start;
  if (swipe > 20) {
    current_slide++;
  } else if (swipe < -20) {
    current_slide--;
  }
});

bttn_left.addEventListener("click", () => {
  if (current_slide > 0) {
    items[current_slide].classList.toggle("slider__item--right");
    current_slide--;
    items[current_slide].classList.toggle("slider__item--left");
  }
  console.log(current_slide);
});

bttn_right.addEventListener("click", () => {
  if (current_slide < items.length - 1) {
    items[current_slide].classList.toggle("slider__item--left");
    current_slide++;
    items[current_slide].classList.toggle("slider__item--right");
  }
  console.log(current_slide);
});
