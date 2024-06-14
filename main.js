gsap.registerPlugin(Flip, ScrollTrigger);

let flipCtx;

const createTimeline = () => {
  flipCtx && flipCtx.revert();

  flipCtx = gsap.context(() => {
    const secondState = Flip.getState(".video-middle-container");
    const thirdState = Flip.getState(".video-final-container");
    const flipConfig = {
      ease: "none",
      duration: 1,
      absolute: true
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "bottom bottom",
        endTrigger: ".our-projects",
        end: "bottom bottom",
        scrub: true,
        markers: true,
      }
    });

    tl.add(Flip.fit(".hero-video", secondState, flipConfig)).add(
      Flip.fit(".hero-video", thirdState, flipConfig),
      "+=0.5"
    );
  });
};

createTimeline();

window.addEventListener("resize", createTimeline);
