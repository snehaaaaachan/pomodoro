console.clear();
gsap.registerPlugin(ScrollTrigger);
window.addEventListener("load", () => {
    gsap
        .timeline({
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top top",
                end: "+=150%",
                pin: true,
                scrub: true,
                markers: false
            }
        })
        .to("img", {
            scale: 2.1,
            z: 375,
            transformOrigin: "center center",
            ease: "power1.inOut"
        })
        .to(
            ".heros",
            {
                scale: 1.1,
                transformOrigin: "center center",
                ease: "power1.inOut"
            },
            "<"
        );
});