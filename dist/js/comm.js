//animate ".box" from an opacity of 0 to an opacity of 0.5
gsap.fromTo(
  ".box",
  { autoAlpha: 0, x: -200 },
  { autoAlpha: 0.5, x: 200, duration: 1 }
);