import { gsap } from "gsap";

export const introAnimation = (wordGroupsRef) => {
    const tl = gsap.timeline();
    tl.to(wordGroupsRef.current, {
        yPercent: -80,
        duration: 5,
        ease: "power3.inOut",
    });

    return tl;
};

export const collapseWords = (wordGroupsRef) => {
    const tl = gsap.timeline();
    tl.to(wordGroupsRef.current, {
        "clip-path": "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
        duration: 3,
        ease: "expo.inOut",
    });

    return tl;
};

export const progressAnimation = (progressRef, progressNumberRef) => {
    const tl = gsap.timeline();

    tl.to(progressRef.current, {
        scaleX: 1,
        duration: 5,
        ease: "power3.inOut",
    })
        .to(
            progressNumberRef.current,
            {
                x: "100vw",
                duration: 5,
                ease: "power3.inOut",
            },
            "<"
        )
        .to(
            progressNumberRef.current,
            {
                textContent: "100", // Set the target text content to 100
                duration: 5,
                roundProps: "textContent", // Animate the number to reach 100
                ease: "power3.inOut", // Optional ease for a smooth transition
            },
            "<"
        )
        .to(progressNumberRef.current, {
            y: 24, // Adjust Y position after completion
            autoAlpha: 0, // Fade out after reaching 100%
            duration: 1, // Short duration for fade-out
        });

    return tl;
};
