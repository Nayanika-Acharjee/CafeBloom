

gsap.registerPlugin(ScrollTrigger);

// 🌟 Hero text fade in
gsap.to(".hero-text h1, .hero-text p", {
  opacity: 1,
  y: 0,
  stagger: 0.2,
  duration: 1.2,
  ease: "power2.out",
  delay: 0.2,
});

// 🌟 Section 1 text animation
gsap.fromTo(
  ".section1-text h1, .section1-text p",
  { x: -60, opacity: 0, visibility: "hidden" },
  {
    scrollTrigger: {
      trigger: ".section1-text",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    x: 0,
    opacity: 1,
    visibility: "visible",
    stagger: 0.2,
    duration: 1,
    ease: "power2.out",
  }
);

// 🌱 Bean falling into kettle (reversible)
let flower = document.querySelector(".flower");
let kettle = document.querySelector(".kettle");

gsap.fromTo(
  flower,
  {
    x: 0,
    y: 0,
    scale: 1,
    opacity:1,
    rotate: 360,
    duration:0.5
  },
  {
    scrollTrigger: {
      trigger: ".section1",
      start: "top 70%",
      end: "top 30%",
      scrub: true, // reversible with scroll
    },
    y: () => {
      let kettleRect = kettle.getBoundingClientRect();
      let flowerRect = flower.getBoundingClientRect();
      return kettleRect.top - flowerRect.top - 10; // fall distance
    },
    x: -50,
    scale: 0.5,
    rotate: 90,
    duration:0.8,
    delay:1,
    opacity:1,
    ease: "power2.out",
     onComplete: () => {
      // 🌟 make bean "stick" inside kettle
      flower.style.position = "absolute";
      flower.style.left = "50%";
      flower.style.top = "50%";
      flower.style.transform = "translate(-50%, -50%) scale(0.5)";
    },
  });


// 🍵 Kettle tilting animation (into section 2)
gsap.to([kettle,flower], {
  scrollTrigger: {
    trigger: ".section2",
    start: "top 80%",
    end: "top 40%",
    scrub: true,
  },
  x: -120,
  y: 380,
  rotate: -35,
  transformOrigin: "right center",
  ease: "power2.out",
});

// 💧 Pouring stream animation (appears in section 2)
let pourStream = document.querySelector(".pour-stream");

gsap.fromTo(
  pourStream,
  { opacity: 0, scaleY: 0 },
  {
    scrollTrigger: {
      trigger: ".section2",
      start: "top 70%",
      end: "top 30%",
      scrub: true,
    },
    opacity: 1,
    scaleY: 1,
    transformOrigin: "top center",
    duration: 0.8,
    ease: "power2.out",
  }
);
