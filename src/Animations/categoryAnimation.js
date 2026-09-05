import { useEffect } from 'react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function usecategoryStoryAnimation({
    sectionWrapRef,
    imageRefs,
    sectionsRef,
    dotsRef,
    progressRef,
    data
}) {

    useEffect(() => {
        if (!data || data.length === 0) return;
        imageRefs.current.forEach((image, index) => {
            gsap.set(image, {
                opacity: index === 0 ? 1 : 0,
                scale: index === 0 ? 1 : 1.1
            });
        });

        function changeImage(activeIndex) {
            imageRefs.current.forEach((image, index) => {
                gsap.to(image, {
                    opacity: index === activeIndex ? 1 : 0,
                    scale: index === activeIndex ? 1 : 1.08,
                    duration: .8,
                    ease: "power3.out"
                });
            });

            dotsRef.current.forEach((dot, index) => {
                if (!dot) return;
                dot.classList.toggle('active', index === activeIndex);
            });

            sectionsRef.current.forEach((section, index) => {
                if (!section) return;
                section.classList.toggle('active', index === activeIndex);
            });
        }

        const triggers = sectionsRef.current.map((section, index) =>
            ScrollTrigger.create({
                trigger: section,
                start: "top center",
                onEnter: () => changeImage(index),
                onEnterBack: () => changeImage(index)
            })
        );

        const progressTrigger = ScrollTrigger.create({
            trigger: sectionWrapRef.current,
            start: "top top",
            end: "bottom bottom",
            onUpdate: (self) => {
                if (progressRef.current) {
                    progressRef.current.style.transform = `scaleY(${self.progress})`;
                }
            }
        });

        return () => {
            triggers.forEach(t => t.kill());
            progressTrigger.kill();
        }

    }, [data, sectionWrapRef, imageRefs, sectionsRef, dotsRef, progressRef]);
    
    //const data = stories[category] || [];

   /* const sectionWrapRef = useRef(null);
    const imageRefs = useRef([]);
    const sectionsRef = useRef([]);
    const dotsRef = useRef([]);
    const progressRef = useRef(null); */
}

