import { useEffect } from "react"
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        
        if ("ScrollRestoration" in window.history) {
            window.history.ScrollRestoration = "manual";
        }

        const frame = requestAnimationFrame(() => {

            if (window.lenis) {
                window.lenis.scrollTo(0, {
                    immediate: true
                });
            } else {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "instant"
                });
            }


            document.documentElement.scrollTo = 0;
            document.body.scrollTo = 0;
        });

        return () => {
            cancelAnimationFrame(frame);
        };

    }, [pathname]);

    return null
}