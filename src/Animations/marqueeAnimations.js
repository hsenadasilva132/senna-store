import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const marqueeAnimation = () => {
    const marquee = document.querySelector(".marquee-track");

    const marqueeTween = gsap.to(marquee, {
        xPercent: -50,
        ease: "none",
        repeat: -1,
        duration: 20
    });
    
    let currentDirection = 1;

    ScrollTrigger.create({
        trigger: ".categories",
        start: "top bottom",
        end: "bottom top",

        onUpdate: (self) => {
            const newDirection = self.getVelocity() > 0 ? 1 : -1;

            if (newDirection != currentDirection) {
                currentDirection = newDirection;
            }

            gsap.to(marqueeTween, {
                timeScale: currentDirection,
                duration: 1.2,
                ease: "power3.out",
                delay: 0.1
            });
        }
    });

    
}