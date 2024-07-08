function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function animation() {
  var t1 = gsap.timeline({
    scrollTrigger: {
      trigger: "#profile h1",
      scroller: "body",
      start: "top -10%",
      end: "top -20%",
      scrub: 3,
    },
  });

  t1.to("body", {
    backgroundColor: "black",
    color: "white",
  });

  var t2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#profile h1",
      scroller: "body",
      start: "top -100%",
      end: "top -135%",
      scrub: 3,
    },
  });

  t2.to("body", {
    backgroundColor: "white",
    color: "black",
  });

  // var t3 = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: "#profile h1",
  //     scroller: "body",
  //     start: "top -200%",
  //     end: "top -230%",
  //     scrub: 3,
  //   },
  // });

  // t3.to("body", {
  //   backgroundColor: "black",
  //   color: "white",
  // });

  // var t4 = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: "#profile h1",
  //     scroller: "body",
  //     start: "top -280%",
  //     end: "top -310%",
  //     scrub: 3,
  //   },
  // });

  // t4.to("body", {
  //   backgroundColor: "white",
  //   color: "black",
  // });
}

animation()