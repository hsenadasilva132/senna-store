import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const splitTitleAnimation = (selector) => {

    document.fonts.ready.then(() => {
        // Só divide o texto após carregar a fonte,
        // Evitando que o layout mude (e force reflow) no meio da divisão
        const split = SplitText.create(selector, { type: "words, chars", autoSplit: true });

        gsap.from(split.chars, {
            y: 100,
            duration: .9,
            opacity: 0,
            stagger: 0.05,
            ease: "power3.out",

            scrollTrigger: {
                trigger: selector,
                toggleActions: "play none none none"
            }
        });
    })
};