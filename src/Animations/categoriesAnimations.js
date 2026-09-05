import Categories from '../components/sections/Categories'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

export const categoriesBackgroundScroll = () => {
       gsap.to(".categories", {
        backgroundColor: "#7E879A",

        scrollTrigger: {
            trigger: ".categories",
            start: "top center",
            end: "bottom center",
            scrub: true
        }
    });
} 