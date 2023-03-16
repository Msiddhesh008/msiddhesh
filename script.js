gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  markers: false,
});

// Logo Animation
$(".hero_section").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".is--large");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top top",
      end: "bottom top",
      scrub: 1,
    },
  });
  tl.from(targetElement, {
    fontSize: "10.2rem",
    y: "-60%",
    duration: 1,
  });
});

// her-title Animation
$(".hero_section").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".hero_title");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top top",
      end: "bottom top",
      scrub: 1.5,
    },
  });
  tl.from(targetElement, {
    x: "56%",
    y:"-150%",
    duration: 3,
  });
});


// text Animation
$(".text_wrap h1").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "-110px top",
      end: "30% top",
      scrub: 0.8,
    },
  });
  tl.to(targetElement, {
    y: "120%",
    duration: 1,
  });
});

// Circle Animate From To
$(".sticky--circle").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".sticky--circle img");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
  });
  tl.fromTo(
    targetElement,
    {
      width: "25rem",
      height: "20rem",
      borderRadius: "1rem",
      filter: "sepia(90%)",
      duration: 1,
    },
    {
      width: "95%",
      height: "100vh",
      borderRadius: "0rem",
      filter: "sepia(0%)",
      duration: 1,
    }
  );
});

// Animate From light To dark
$(".grid--wrapper:nth-child(odd)").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $("body, .main_wrapper ul");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top top",
      end: "bottom bottom",
      scrub: 2,
    },
  });
  tl.fromTo(
    targetElement,
    {
      borderColor: "#2e2a27",
      backgroundColor: "#e7e1d9",
      color: "#2e2a27",
      duration: 1,
    },
    {
      borderColor: "#e7e1d9",
      backgroundColor: "#2e2a27",
      color: "#e7e1d9",
      duration: 1,
    }
  );
});

// Animate From dark To light
$(".sticky--circle, .grid--wrapper:nth-child(even)").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $("body, .main_wrapper ul");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top top",
      end: "bottom bottom",
      scrub: 2,
    },
  });
  tl.fromTo(
    targetElement,
    {
      borderColor: "#e7e1d9",
      backgroundColor: "#2e2a27",
      color: "#e7e1d9",
      duration: 1,
    },
    {
      borderColor: "#2e2a27",
      backgroundColor: "#e7e1d9",
      color: "#2e2a27",
      duration: 1,
    }
  );
});

// Grid Title Change
$(".titleItem").eq(0).addClass("active");

console.log($(".titleItem").eq(0).addClass("active"));
// Run a function
$(".grid--wrapper").each(function (index) {
  let triggerElement = $(this);
  let myIndex = $(this).index();
  let targetElement = $(".titleItem").eq(myIndex);
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top bottom",
      end: "bottom bottom",
      onEnter: () => {
        $(".titleItem").removeClass("active");
        targetElement.addClass("active");
      },
      onEnterBack: () => {
        $(".titleItem").removeClass("active");
        targetElement.addClass("active");
      },
    },
  });
});

// About ANimation
$(".about").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".about__text");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top bottom",
      end: "bottom top",
      scrub: 0.2,
    },
  });
  tl.from(targetElement, {
    y: "-5rem",
    // duration: 1,
  });
});














var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})
