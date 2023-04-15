paceOptions = {
  ajax: true, //Checks AJAX requests
  document: true, //Document is ready
};

Pace.on("done", () => {
  gsap
    .timeline()
    .add("p")
    .to(
      ".pace",
      {
        transform: "scale(10, 1)",
        duration: 4,
      },
      "+=.2"
    )
    .to(
      ".pace",
      {
        duration: 1,
        height: "10%",
      },
      "-=2.5"
    )
    .to(
      ".loading-text",
      {
        delay: 0.2,
        duration: 3,
        opacity: 0,
        yPercent: -440,
        ease: "BezierEasing(0.19,1,0.22,1)",
      },
      "p"
    )
    .to(
      ".title",
      {
        duration: 2,
        delay: 0.3,
        y: -10,
        opacity: 0,
        ease: Expo.easeInOut,
      },
      "-=2.5"
    );
});
