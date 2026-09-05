import '../../styles/pageLoader.css';

import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LoadingIcon from './LoadingIcon';
import gsap from 'gsap';


function PageLoader() {
    const location = useLocation();
    const loaderRef = useRef(null);
    const contentRef = useRef(null);
    const firstRender = useRef(true);
    const [visible, setVisible] = useState(false);


    useEffect(() => {

        // Não executa na primeira montagem.
        // O preloader inicial já cuida disso.

        if (firstRender.current) {
            firstRender.current = false;
            return;
        }

        setVisible(true);

        const timeline = gsap.timeline();


        timeline
            .fromTo(
                loaderRef.current,
                {
                    opacity: 0
                },
                {
                    opacity: 1,
                    duration: .2,
                    ease: "power2.out"
                }
            )
            .fromTo(
                contentRef.current,
                {
                    y: 20,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: .35,
                    ease: "power3.out"
                }
            );

        const timer =
            setTimeout(() => {
                gsap.to(
                    loaderRef.current,
                    {
                        opacity: 0,
                        duration: .35,
                        ease: "power2.inOut",
                        onComplete: () => {
                            setVisible(false);
                        }

                    }
                );

            }, 550);


        return () => {
            clearTimeout(timer);
            timeline.kill();
        };
    }, [location.key]);


    if (!visible) {
        return null;
    }


    return (
        <div className="page-loader" ref={loaderRef}>

            <div className="page-loader-content" ref={contentRef}>
                <LoadingIcon />
                <strong>SennaStore</strong>
            </div>
        </div>
    );
}

export default PageLoader;